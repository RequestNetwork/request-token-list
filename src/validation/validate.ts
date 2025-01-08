import Ajv from "ajv";
import addFormats from "ajv-formats";
import { ethers } from "ethers";
import { readFileSync } from "fs";
import { TokenList, RequestToken, NetworkType, TokenType } from "../types";
import schema from "../schemas/token-list-schema.json";

const ajv = new Ajv();
addFormats(ajv);

export async function validateTokenList(
  tokenList: TokenList
): Promise<boolean> {
  try {
    // Schema validation
    const validate = ajv.compile(schema);
    const valid = validate(tokenList);

    if (!valid) {
      console.error("Schema validation errors:", validate.errors);
      return false;
    }

    // Version validation
    if (!isValidVersion(tokenList.version)) {
      console.error("Invalid version format");
      return false;
    }

    // Timestamp validation
    if (!isValidTimestamp(tokenList.timestamp)) {
      console.error("Invalid timestamp format");
      return false;
    }

    // Check for duplicate token IDs
    if (hasDuplicateTokens(tokenList.tokens)) {
      console.error("Duplicate token IDs found");
      return false;
    }

    // Validate individual tokens
    for (const token of tokenList.tokens) {
      if (!(await validateToken(token))) {
        return false;
      }
    }

    return true;
  } catch (error) {
    console.error("Validation error:", error);
    return false;
  }
}

async function validateToken(token: RequestToken): Promise<boolean> {
  // Validate address format
  if (!ethers.isAddress(token.address)) {
    console.error(
      `Invalid address format for token ${token.id}: ${token.address}`
    );
    return false;
  }

  // Validate decimals
  if (!isValidDecimals(token.decimals)) {
    console.error(`Invalid decimals for token ${token.id}: ${token.decimals}`);
    return false;
  }

  // Validate network type
  if (!isValidNetwork(token.network)) {
    console.error(`Invalid network for token ${token.id}: ${token.network}`);
    return false;
  }

  // Validate token type
  if (!isValidTokenType(token.type)) {
    console.error(`Invalid token type for token ${token.id}: ${token.type}`);
    return false;
  }

  return true;
}

function isValidVersion(version: {
  major: number;
  minor: number;
  patch: number;
}): boolean {
  return (
    Number.isInteger(version.major) &&
    version.major >= 0 &&
    Number.isInteger(version.minor) &&
    version.minor >= 0 &&
    Number.isInteger(version.patch) &&
    version.patch >= 0
  );
}

function isValidTimestamp(timestamp: string): boolean {
  const date = new Date(timestamp);
  return date.toString() !== "Invalid Date";
}

function isValidDecimals(decimals: number): boolean {
  return Number.isInteger(decimals) && decimals >= 0 && decimals <= 18;
}

function isValidNetwork(network: NetworkType): boolean {
  return Object.values(NetworkType).includes(network);
}

function isValidTokenType(type: TokenType): boolean {
  return Object.values(TokenType).includes(type);
}

function hasDuplicateTokens(tokens: RequestToken[]): boolean {
  const ids = new Set<string>();
  for (const token of tokens) {
    if (ids.has(token.id)) {
      return true;
    }
    ids.add(token.id);
  }
  return false;
}

// Optional: Validate contract existence on network
// async function contractExistsOnNetwork(
//   address: string,
//   network: NetworkType
// ): Promise<boolean> {
//   // Implementation would depend on how you want to verify contract existence
//   // Could use ethers.js to check contract code existence
//   return true;
// }

async function main() {
  try {
    const tokenList = JSON.parse(
      readFileSync("./tokens/token-list.json", "utf-8")
    );
    const isValid = await validateTokenList(tokenList);

    if (!isValid) {
      process.exit(1);
    }

    console.log("Token list is valid!");
  } catch (error) {
    console.error("Error validating token list:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(console.error);
}
