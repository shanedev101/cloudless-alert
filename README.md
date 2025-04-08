# ☁️ cloudless-alert

A lightweight GitHub Action designed to **send deployment or workflow notifications** from environments that don’t support cloud-native event systems — like traditional VPS, on-premise servers, or self-hosted CI/CD pipelines.

> Perfect for **cloudless setups** where you still want visibility via Discord (or other channels soon).

---

## ✅ Features

- 📣 Send beautiful Discord embeds with status, message, environment info.
- 🔧 Easy to customize and extend for other platforms (e.g., Slack, Telegram).
- 🧩 Modular design — clean structure to add more channels in future.
- 🐳 Docker-ready for local or server usage.
- ⚙️ Built with Node.js 22 for performance and compatibility.

## 📦 Installation

You can use this action in your GitHub workflows:

```yaml
- name: Notify Discord
  uses: shanedev101/cloudless-alert@v1
  with:
    webhook: ${{ secrets.DISCORD_WEBHOOK }}
    status: '🚀 Deployment Started'
    message: 'Deployment started on branch `${{ github.ref_name }}`'
    color: '3447003'
    env_name: 'dev'
```

## 🔧 Inputs

| Name      | Required | Description                              |
|-----------|----------|------------------------------------------|
| `webhook` | ✅       | Discord Webhook URL                      |
| `status`  | ✅       | Status text (e.g. ✅ Success)            |
| `message` | ✅       | Message content                          |
| `color`   | ❌       | Embed color (decimal format)             |
| `env_name`| ❌       | Environment name (e.g. dev, prod)        |

## 🐳 Docker Usage

Build and run the action manually:

```bash
docker build -t cloudless-alert .
docker run --rm \
  -e WEBHOOK_URL="your_webhook_url" \
  -e STATUS="✅ Deployment Success" \
  -e MESSAGE="Deployment completed" \
  -e ENV_NAME="production" \
  cloudless-alert
```

## 📜 License

MIT © 2025 [Shane](https://github.com/shanedev101)
