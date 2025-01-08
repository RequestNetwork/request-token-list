export interface RequestToken {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  network: NetworkType;
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
}
