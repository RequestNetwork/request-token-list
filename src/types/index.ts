export interface RequestToken {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  network: NetworkType;
  chainId: number;
  type: TokenType;
  hash?: string;
  logoURI?: string;
}

export interface TokenList {
  name: string;
  timestamp: string;
  version: {
    major: number;
    minor: number;
    patch: number;
  };
  tokens: RequestToken[];
}

export enum TokenType {
  ISO4217 = "ISO4217",
  ERC20 = "ERC20",
  ETH = "ETH",
}

export enum NetworkType {
  CELO = "celo",
  MAINNET = "mainnet",
  MATIC = "matic",
  FANTOM = "fantom",
  BSCTEST = "bsctest",
  BSC = "bsc",
  XDAI = "xdai",
  AVALANCHE = "avalanche",
  OPTIMISM = "optimism",
  MOONBEAM = "moonbeam",
  SEPOLIA = "sepolia",
  FUSE = "fuse",
  ARBITRUM_RINKEBY = "arbitrum-rinkeby",
  ARBITRUM_ONE = "arbitrum-one",
  TOMBCHAIN = "tombchain",
  MANTLE = "mantle",
  MANTLE_TESTNET = "mantle-testnet",
  CORE = "core",
  ZKSYNCERA = "zksyncera",
  ZKSYNCERATESTNET = "zksynceratestnet",
  BASE = "base",
  FIAT = "fiat",
}

export const CHAIN_IDS: Record<string, number> = {
  mainnet: 1,
  matic: 137,
  fantom: 250,
  bsc: 56,
  xdai: 100,
  avalanche: 43114,
  optimism: 10,
  moonbeam: 1284,
  sepolia: 11155111,
  fuse: 122,
  "arbitrum-one": 42161,
  tombchain: 6969,
  mantle: 5000,
  "mantle-testnet": 5001,
  core: 1116,
  zksyncera: 324,
  zksynceratestnet: 300,
  base: 8453,
  fiat: 0, // Special case for fiat currencies
};
