# Contributing to Request Network Token List

We love your input! We want to make contributing to the Request Network Token List as easy and transparent as possible, whether it's:

- Adding new tokens
- Reporting a bug
- Discussing the current state of the token list
- Submitting a fix
- Proposing new features

## Token Requirements

To add a token to the list, ensure it meets the following criteria:

1. The token must be deployed on a supported blockchain network
2. The token contract must be verified on the respective blockchain explorer
3. The token must be actively used or intended for use within the Request Network ecosystem
4. Logo requirements:
   - PNG or SVG format
   - Recommended size: 128x128px
   - Maximum file size: 100KB

## Adding a New Token

1. Fork the repository
2. Create a new branch: `git checkout -b add-token-NAME`
3. Add your token information to `tokens/token-list.json`
4. Add your token's logo to `tokens/assets/`
5. Run tests locally: `npm test`
6. Commit your changes: `git commit -m 'Add TOKEN_NAME token'`
7. Push to the branch: `git push origin add-token-NAME`
8. Submit a Pull Request

### Token Information Format

```json
{
  "name": "Token Name",
  "address": "0x...",
  "symbol": "TKN",
  "decimals": 18,
  "chainId": 1,
  "logoURI": "https://..."
}
```

## Pull Request Process

1. Ensure your PR includes all required token information
2. Update the README.md with details of changes if needed
3. The PR will be merged once you have the sign-off of at least one maintainer
4. All CI checks must pass before merging

## Any contributions you make will be under the MIT Software License

When you submit code changes, your submissions are understood to be under the same [MIT License](LICENSE) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issue tracker](issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](issues/new).

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md).
