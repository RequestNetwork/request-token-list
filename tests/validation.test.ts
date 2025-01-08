import { describe, it, expect } from "vitest";
import { validateTokenList } from "../src/validation/validate";
import { NetworkType, TokenList, TokenType } from "../src/types";

describe("Token List Validation", () => {
  it("should validate a correct token list", async () => {
    const validList: TokenList = {
      name: "Test Token List",
      timestamp: new Date().toISOString(),
      version: { major: 1, minor: 0, patch: 0 },
      tokens: [
        {
          id: "test-token",
          name: "Test Token",
          symbol: "TEST",
          decimals: 18,
          address: "0x1234567890123456789012345678901234567890",
          network: NetworkType.MAINNET,
          type: TokenType.ERC20,
        },
      ],
    };

    expect(await validateTokenList(validList)).toBe(true);
  });
});
