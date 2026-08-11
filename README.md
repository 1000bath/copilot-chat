# Dek Copilot Chat

VS Code extension that exposes AI models from **Dek Gateway** inside GitHub Copilot Chat.

## Features

- Native Copilot Chat and Agent Mode integration
- OpenAI-compatible and Anthropic-compatible requests
- Tool calling, reasoning output, images, and streaming
- Model discovery and refresh
- Multiple encrypted API-key profiles
- Optional OpenCode Go and OpenCode Zen provider compatibility
- Configurable thinking effort and vision proxy

## Requirements

- VS Code 1.125 or newer
- A running `dek-gateway` instance or a supported third-party provider
- An API key when required by the configured service

## Development

```bash
npm ci
npm run compile
npm test
```

To package a VSIX:

```bash
npm run package
```

## Configure Dek Gateway

1. Install the extension or load it through the VS Code Extension Development Host.
2. Run **Dek Gateway: Manage Provider** from the command palette.
3. Enter the gateway URL and API key required by your deployment.
4. Run **Dek Gateway: Refresh Models**.
5. Select a Dek model in Copilot Chat.

Legacy OpenCode command/provider identifiers remain registered as compatibility aliases so existing VS Code settings and secrets continue to work. New configuration and commands use the `dekgo`, `dekzen`, and `dekgateway` namespaces.

## Security

Credentials are stored using VS Code SecretStorage. Never commit provider keys, generated VSIX files, or diagnostic output containing prompts and responses.

## Documentation

Additional architecture, feature, and historical implementation notes are under [`docs/`](./docs/). Some historical documents retain upstream names to describe their original context.

## License and attribution

MIT. See [`LICENSE`](./LICENSE). This project is derived from `opencode-copilot-chat`; its original copyright and license notices are preserved.

OpenCode, GitHub Copilot, VS Code, and model-provider names belong to their respective owners. Dek Copilot Chat is an independent integration.
