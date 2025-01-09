import { describe, it, expect } from "vitest";
import { validateTokenList } from "../src/validation/validate";
import { NetworkType, TokenList, TokenType, CHAIN_IDS } from "../src/types";

describe("Token List Validation", () => {
  const validToken = {
    id: "test-token",
    name: "Test Token",
    symbol: "TEST",
    decimals: 18,
    address: "0x1234567890123456789012345678901234567890",
    network: NetworkType.MAINNET,
    chainId: CHAIN_IDS.mainnet,
    type: TokenType.ERC20,
  };

  it("should validate a correct token list", async () => {
    const validList: TokenList = {
      name: "Test Token List",
      timestamp: new Date().toISOString(),
      version: { major: 1, minor: 0, patch: 0 },
      tokens: [validToken],
    };

    expect(await validateTokenList(validList)).toBe(true);
  });

  it("should reject invalid token addresses", async () => {
    const invalidList: TokenList = {
      name: "Test Token List",
      timestamp: new Date().toISOString(),
      version: { major: 1, minor: 0, patch: 0 },
      tokens: [
        {
          ...validToken,
          address: "0xinvalid",
        },
      ],
    };

    expect(await validateTokenList(invalidList)).toBe(false);
  });

  it("should reject duplicate token IDs", async () => {
    const duplicateList: TokenList = {
      name: "Test Token List",
      timestamp: new Date().toISOString(),
      version: { major: 1, minor: 0, patch: 0 },
      tokens: [
        validToken,
        {
          ...validToken,
          address: "0x2234567890123456789012345678901234567890",
        },
      ],
    };

    expect(await validateTokenList(duplicateList)).toBe(false);
  });

  it("should reject invalid decimals", async () => {
    const invalidList: TokenList = {
      name: "Test Token List",
      timestamp: new Date().toISOString(),
      version: { major: 1, minor: 0, patch: 0 },
      tokens: [
        {
          ...validToken,
          decimals: -1,
        },
      ],
    };

    expect(await validateTokenList(invalidList)).toBe(false);
  });

  it("should validate version format", async () => {
    const invalidList: TokenList = {
      name: "Test Token List",
      timestamp: new Date().toISOString(),
      version: { major: -1, minor: 0, patch: 0 },
      tokens: [validToken],
    };

    expect(await validateTokenList(invalidList)).toBe(false);
  });

  it("should validate network type", async () => {
    const invalidList: TokenList = {
      name: "Test Token List",
      timestamp: new Date().toISOString(),
      version: { major: 1, minor: 0, patch: 0 },
      tokens: [
        {
          ...validToken,
          network: "INVALID_NETWORK" as NetworkType,
        },
      ],
    };

    expect(await validateTokenList(invalidList)).toBe(false);
  });

  it("should validate token type", async () => {
    const invalidList: TokenList = {
      name: "Test Token List",
      timestamp: new Date().toISOString(),
      version: { major: 1, minor: 0, patch: 0 },
      tokens: [
        {
          ...validToken,
          type: "INVALID_TYPE" as TokenType,
        },
      ],
    };

    expect(await validateTokenList(invalidList)).toBe(false);
  });

  it("should validate timestamp format", async () => {
    const invalidList: TokenList = {
      name: "Test Token List",
      timestamp: "invalid-date",
      version: { major: 1, minor: 0, patch: 0 },
      tokens: [validToken],
    };

    expect(await validateTokenList(invalidList)).toBe(false);
  });

  it("should reject invalid chainId for network", async () => {
    const invalidList: TokenList = {
      name: "Test Token List",
      timestamp: new Date().toISOString(),
      version: { major: 1, minor: 0, patch: 0 },
      tokens: [
        {
          ...validToken,
          network: NetworkType.MATIC,
          chainId: CHAIN_IDS.mainnet, // Wrong chainId for MATIC network
        },
      ],
    };

    expect(await validateTokenList(invalidList)).toBe(false);
  });

  it("should validate correct chainId for each network", async () => {
    // Test a few different networks
    const networks = [
      { network: NetworkType.MATIC, chainId: CHAIN_IDS.matic },
      { network: NetworkType.BSC, chainId: CHAIN_IDS.bsc },
      { network: NetworkType.AVALANCHE, chainId: CHAIN_IDS.avalanche },
    ];

    for (const { network, chainId } of networks) {
      const validList: TokenList = {
        name: "Test Token List",
        timestamp: new Date().toISOString(),
        version: { major: 1, minor: 0, patch: 0 },
        tokens: [
          {
            ...validToken,
            network,
            chainId,
          },
        ],
      };

      expect(await validateTokenList(validList)).toBe(true);
    }
  });
});
