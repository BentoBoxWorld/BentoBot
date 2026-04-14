# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

BentoBot is a Discord bot for the BentoBoxWorld community, built with Node.js and discord.js v14. It handles prefix-based commands (default `!`), auto-uploads attachments to a paste service (Haste), and provides documentation/resource links for BentoBox plugins and addons.

## Setup

```bash
npm install
```

Create `config.json` in the root (gitignored — never commit this):
```json
{
  "prefix": "!",
  "token": "YOUR_DISCORD_BOT_TOKEN"
}
```

## Commands

```bash
npm start        # node index.js
npm test         # run Jest test suite
```

Run a single test file:
```bash
npx jest __tests__/aliases.test.js
```

## Architecture

**Entry point:** `index.js` — creates the Discord client with required gateway intents, loads all commands from `./commands/`, handles message routing, per-user cooldowns, activity rotation, and auto-paste of file attachments to Haste.

**Command pattern:** Each file in `commands/` is a CommonJS module exporting:
```js
module.exports = {
  name: 'commandname',
  description: '...',
  permission: 'EVERYONE',    // or 'MANAGE_CHANNELS' / 'ADMINISTRATOR'
  aliases: ['alias1'],
  cooldown: 3,               // seconds (default 3)
  usage: '!commandname [args]',
  execute(message, args, client) { ... }
}
```
Commands are loaded dynamically — adding a new file to `commands/` is all that's needed to register it.

**Shared utilities:**
- `embed.js` — `EmbedGen(input)` takes either a plain `{ title, description, fields }` object or an existing `EmbedBuilder`, applies consistent color (#F55E00), footer, and timestamp, and returns an `EmbedBuilder`
- `aliases.js` / `configs/aliases.json` — maps short names (e.g. `"acid"`) to canonical project names (e.g. `"AcidIsland"`); used by `github`, `javadocs`, `ci`, and similar commands

**External services used:**
- `https://paste.md-5.net` — auto-upload of `.json`, `.yaml`, `.txt` attachments
- `https://docs.bentobox.world` — documentation search API
- `https://ci.codemc.io` — CI/development build links
- `https://download.bentobox.world` — download portal

## discord.js v14 Notes

- The client requires explicit gateway intents. `MessageContent` is a **privileged intent** — it must be enabled in the Discord Developer Portal under Bot → Privileged Gateway Intents. Without it the bot receives empty message content and commands won't work.
- All embeds are sent as `{ embeds: [builder] }` (not the v12 `{ embed: x }` format).
- Permissions use `PermissionFlagsBits` (mapped in `index.js`). To add a new permission level, add it to the `permMap` object there.

## Adding a Command

1. Create `commands/mycommand.js` following the module pattern above.
2. No registration needed — `index.js` auto-discovers all `.js` files in `commands/`.
3. Add any new project aliases to `configs/aliases.json` and `aliases.js`.

---

## One-Time Discord Setup (connecting a new bot)

### 1. Create a Discord Application and Bot

1. Go to [discord.com/developers/applications](https://discord.com/developers/applications) → **New Application**
2. Go to **Bot** tab → click **Add Bot** → confirm
3. Under **Token**, click **Reset Token** and copy it — this goes in `config.json`
4. Under **Privileged Gateway Intents**, enable **Message Content Intent**

### 2. Invite the Bot to Your Server

1. Go to **OAuth2 → URL Generator**
2. Scopes: check **bot**
3. Bot Permissions: check **Send Messages**, **Embed Links**, **Read Message History**, **Read Messages/View Channels**
4. Copy the generated URL, open it in a browser, and select your server

### 3. Remove the Old Bot

In your Discord server, right-click the old BentoBot user → **Kick** (or **Ban** to prevent re-invite). The old token is already invalid since the volunteer's server stopped.

---

## Running on a Server (Production)

Using [PM2](https://pm2.keymetrics.io/) to keep the bot running and restart it on reboots:

```bash
npm install -g pm2
pm2 start index.js --name bentobot
pm2 save
pm2 startup    # follow the printed instructions to enable on reboot
```

Useful PM2 commands:
```bash
pm2 logs bentobot    # view live logs
pm2 restart bentobot
pm2 stop bentobot
```
