# Figma MCP Server

A Model Context Protocol (MCP) server for integrating with Figma's API. This server enables AI assistants to interact with Figma files, components, styles, and more.

## Features

### Tools

1. **get_figma_file** - Get file information and structure
2. **get_figma_components** - List all components in a file
3. **get_figma_styles** - Get all styles (colors, text, effects)
4. **export_figma_node** - Export nodes as images (PNG, JPG, SVG, PDF)
5. **get_figma_comments** - Retrieve file comments

## Setup

1. Get your Figma API token:
   - Go to https://www.figma.com/developers/api#access-tokens
   - Generate a personal access token

2. Create `.env` file:
   ```bash
   cp .env.example .env
   ```

3. Add your token to `.env`:
   ```
   FIGMA_API_TOKEN=your_token_here
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Build the server:
   ```bash
   npm run build
   ```

## Usage

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

### Claude Desktop Configuration

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "figma": {
      "command": "node",
      "args": ["/path/to/Figma/mcp-server/dist/index.js"],
      "env": {
        "FIGMA_API_TOKEN": "your_token_here"
      }
    }
  }
}
```

## Finding Figma File Keys

The file key is in the Figma URL:
```
https://www.figma.com/design/FILE_KEY/File-Name
                              ^^^^^^^^
                              This is the file key
```

## Example Tool Calls

### Get File Structure
```json
{
  "name": "get_figma_file",
  "arguments": {
    "file_key": "uLN8hMLUjPOaR035FSB7BT"
  }
}
```

### Export Node as PNG
```json
{
  "name": "export_figma_node",
  "arguments": {
    "file_key": "uLN8hMLUjPOaR035FSB7BT",
    "node_id": "123:456",
    "format": "png",
    "scale": 2
  }
}
```

## API Reference

All tools use the [Figma REST API](https://www.figma.com/developers/api).

## License

MIT
