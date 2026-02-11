# CompliLaw Project with Figma Integration

This project combines a React-based CompliLaw application with comprehensive Figma API integration through an MCP (Model Context Protocol) server.

## 🎨 Original Design

The original Figma design is available at: https://www.figma.com/design/uLN8hMLUjPOaR035FSB7BT/complilaw-project

## 📦 Project Structure

```
Figma/
├── mcp-server/          # Figma MCP Server
│   ├── src/
│   │   └── index.ts     # MCP server implementation
│   ├── package.json
│   └── README.md
├── src/
│   ├── components/
│   │   ├── figma/       # Figma-related components
│   │   ├── landing/     # Landing page components
│   │   ├── layout/      # Layout components
│   │   └── ui/          # UI components (Radix UI)
│   ├── hooks/
│   │   └── useFigma.ts  # React hooks for Figma API
│   ├── lib/
│   │   └── figma-client.ts  # Figma API client
│   └── ...
└── ...
```

## 🚀 Quick Start

### Main React Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

### Figma MCP Server

1. Navigate to MCP server directory:
   ```bash
   cd mcp-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file with your Figma API token:
   ```bash
   cp .env.example .env
   # Edit .env and add your FIGMA_API_TOKEN
   ```

4. Build the server:
   ```bash
   npm run build
   ```

5. Run the server:
   ```bash
   npm start
   ```

See [mcp-server/README.md](mcp-server/README.md) for detailed MCP server documentation.

## 🎨 Figma Integration Features

### React Components

#### FigmaImage
Automatically exports and displays Figma nodes as images:

```tsx
import { FigmaImage } from '@/components/figma';

<FigmaImage
  fileKey="your-file-key"
  nodeId="node-id"
  apiToken={process.env.FIGMA_API_TOKEN}
  exportSettings={{ format: 'png', scale: 2 }}
/>
```

#### FigmaDesignTokens
Displays design tokens (colors, text styles) from Figma:

```tsx
import { FigmaDesignTokens } from '@/components/figma';

<FigmaDesignTokens
  fileKey="your-file-key"
  apiToken={process.env.FIGMA_API_TOKEN}
  styleType="FILL"
/>
```

#### ImageWithFallback
Image component with automatic fallback on error:

```tsx
import { ImageWithFallback } from '@/components/figma';

<ImageWithFallback
  src="/path/to/image.png"
  alt="Description"
/>
```

### React Hooks

#### useFigmaFile
Fetch complete Figma file data:

```tsx
import { useFigmaFile } from '@/hooks/useFigma';

const { data, loading, error } = useFigmaFile('file-key', {
  apiToken: 'your-token',
});
```

#### useFigmaComponents
Get all components from a file:

```tsx
import { useFigmaComponents } from '@/hooks/useFigma';

const { data: components, loading } = useFigmaComponents('file-key', {
  apiToken: 'your-token',
});
```

#### useFigmaStyles
Get design tokens and styles:

```tsx
import { useFigmaStyles } from '@/hooks/useFigma';

const { data: styles, loading } = useFigmaStyles('file-key', {
  apiToken: 'your-token',
});
```

#### useFigmaExport
Export nodes as images:

```tsx
import { useFigmaExport } from '@/hooks/useFigma';

const { exportNode, loading } = useFigmaExport('file-key', {
  apiToken: 'your-token',
});

const imageUrl = await exportNode('node-id', { format: 'svg' });
```

### Figma API Client

Low-level client for direct API access:

```tsx
import { createFigmaClient } from '@/lib/figma-client';

const client = createFigmaClient('your-token');

// Get file
const file = await client.getFile('file-key');

// Export image
const imageUrl = await client.exportImage('file-key', 'node-id', {
  format: 'png',
  scale: 2,
});

// Search nodes
const frames = client.searchNodes(file.document,
  node => node.type === 'FRAME'
);
```

## 🔧 Tech Stack

- **Frontend**: React 18.3.1, TypeScript
- **Build Tool**: Vite 6.3.5
- **UI Library**: Radix UI, shadcn/ui
- **Backend**: Supabase
- **Styling**: Tailwind CSS
- **Figma Integration**: Custom MCP Server, Figma REST API

## 🔑 Environment Variables

Create a `.env` file for sensitive data:

```env
FIGMA_API_TOKEN=your_figma_personal_access_token
VITE_FIGMA_FILE_KEY=your_default_file_key
```

Get your Figma API token from: https://www.figma.com/developers/api#access-tokens

## 📚 Documentation

- [Figma MCP Server Documentation](mcp-server/README.md)
- [Figma REST API Documentation](https://www.figma.com/developers/api)
- [Model Context Protocol](https://modelcontextprotocol.io)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - See LICENSE file for details
