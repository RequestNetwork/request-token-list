import Ajv from "ajv";
import addFormats from "ajv-formats";
import { ethers } from "ethers";
import { readFileSync } from "fs";
import { TokenList, RequestToken } from "../types";
import schema from "../schemas/token-list-schema.json";

const ajv = new Ajv();
addFormats(ajv);

export async function validateTokenList(
  tokenList: TokenList
): Promise<boolean> {
  // Schema validation
  const validate = ajv.compile(schema);
  const valid = validate(tokenList);

  if (!valid) {
    console.error("Schema validation errors:", validate.errors);
    return false;
  }

  // Additional validations
  for (const token of tokenList.tokens) {
    if (!(await validateToken(token))) {
      return false;
    }
  }

  return true;
}

async function validateToken(token: RequestToken): Promise<boolean> {
  // Validate address format
  if (!ethers.isAddress(token.address)) {
    console.error(
      `Invalid address format for token ${token.id}: ${token.address}`
    );
    return false;
  }

  // Add more validations as needed
  // For example: check if contract exists on network
  // check for duplicate IDs, etc.

  return true;
}

async function main() {
  const tokenList = JSON.parse(
    readFileSync("./tokens/token-list.json", "utf-8")
  );

  const isValid = await validateTokenList(tokenList);

  if (!isValid) {
    process.exit(1);
  }

  console.log("Token list is valid!");
}

if (require.main === module) {
  main().catch(console.error);
}
