# Request Network Token List

A comprehensive token list for Request Network products, containing verified tokens that can be used across the Request Network ecosystem.

## Overview

This repository contains a curated list of tokens supported by Request Network products. The token list follows a standardized format and includes essential information about each token, such as address, symbol, name, decimals, and chainId.

## Usage

The token list is available in multiple versioned formats:

### Latest Version (Recommended)
`https://requestnetwork.github.io/request-token-list/latest.json`

### Versioned URLs
Pin to specific versions for stability:

- **Specific patch version**: `https://requestnetwork.github.io/request-token-list/v1.1.0.json`
- **Latest minor version**: `https://requestnetwork.github.io/request-token-list/v1.1.json` (updates to v1.1.x automatically)
- **Latest major version**: `https://requestnetwork.github.io/request-token-list/v1.json` (updates to v1.x.x automatically)

### Legacy Path
For backward compatibility:
`https://requestnetwork.github.io/request-token-list/token-list.json` (always points to latest)

### Example Usage

Fetch the latest token list:
```typescript
const tokenList = await fetch(
  "https://requestnetwork.github.io/request-token-list/latest.json"
).then((res) => res.json());
```

Pin to a specific version for production stability:
```typescript
const tokenList = await fetch(
  "https://requestnetwork.github.io/request-token-list/v1.1.0.json"
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
3. Bump the version appropriately:
   - **Patch** (x.x.1): Bug fixes, corrections to existing tokens
   - **Minor** (x.1.0): New token additions (most common)
   - **Major** (2.0.0): Breaking changes (e.g., removing tokens, changing schema)
4. Make sure your token meets our requirements (see [CONTRIBUTING.md](./CONTRIBUTING.md))
5. Run tests locally: `npm test`
6. Create a Pull Request

**Note**: The timestamp is automatically updated when the deployment workflow runs after a release is published, marking the deployment time to GitHub Pages.

### Publishing a New Version

After merging changes to `main`:

1. Create a GitHub Release with a tag matching the version in `tokens/token-list.json` (e.g., `v1.2.0`)
   - The tag must use the format `v<MAJOR>.<MINOR>.<PATCH>` (e.g., `v1.2.0`)
   - Ensure the release tag matches the version in your token list exactly
2. The deployment workflow will automatically:
   - Update the timestamp to the current deployment time
   - Preserve the new version as a historical snapshot in `versions/`
   - Deploy all versioned files to GitHub Pages
   - Make the new version available at all URL patterns

Monitor deployment progress in the [Actions tab](https://github.com/RequestNetwork/request-token-list/actions/workflows/deploy.yml) of this repository.

**Note**: The workflow does not validate that the release tag matches the version in `tokens/token-list.json`. If they don't match, the deployed version will use the version from the JSON file, not the release tag. Always ensure they match to avoid confusion.

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
