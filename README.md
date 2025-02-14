# Request Network Token List

A comprehensive token list for Request Network products, containing verified tokens that can be used across the Request Network ecosystem.

## Overview

This repository contains a curated list of tokens supported by Request Network products. The token list follows a standardized format and includes essential information about each token, such as address, symbol, name, decimals, and chainId.

## Usage

The token list is available at:
`https://requestnetwork.github.io/request-token-list/latest.json`

You can fetch the token list directly in your application:

```typescript
const tokenList = await fetch(
  "https://requestnetwork.github.io/request-token-list/latest.json"
).then((res) => res.json());
```

## Token List Structure

Each token in the list contains the following information:

```json
{
  "id": "TKN-mainnet",
  "name": "Token Name",
  "address": "0x...",
  "symbol": "TKN",
  "decimals": 18,
  "chainId": 1,
  "logoURI": "https://..."
}
```

## Adding a New Token

We welcome community contributions! To add a new token to the list:

1. Fork this repository
2. Add your token information to `tokens/token-list.json`
3. Make sure your token meets our requirements (see [CONTRIBUTING.md](./CONTRIBUTING.md))
4. Run tests locally: `npm test`
5. Create a Pull Request

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Testing

```bash
npm test
```

## Validation

All tokens undergo automatic validation through our CI/CD pipeline to ensure:

- Valid token addresses
- Correct token information
- Logo availability and format
- Compliance with schema requirements

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Security

For security concerns, please submit an issue or contact the Request Network team.
