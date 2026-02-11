#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN;
const FIGMA_API_BASE = "https://api.figma.com/v1";

interface FigmaFile {
  name: string;
  lastModified: string;
  thumbnailUrl: string;
  version: string;
}

interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
}

class FigmaMCPServer {
  private server: Server;
  private axiosInstance;

  constructor() {
    this.server = new Server(
      {
        name: "figma-mcp-server",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
          resources: {},
        },
      }
    );

    this.axiosInstance = axios.create({
      baseURL: FIGMA_API_BASE,
      headers: {
        "X-Figma-Token": FIGMA_API_TOKEN || "",
      },
    });

    this.setupHandlers();
    this.setupErrorHandling();
  }

  private setupErrorHandling(): void {
    this.server.onerror = (error) => {
      console.error("[MCP Error]", error);
    };

    process.on("SIGINT", async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  private setupHandlers(): void {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: "get_figma_file",
          description: "Get Figma file information and structure",
          inputSchema: {
            type: "object",
            properties: {
              file_key: {
                type: "string",
                description: "The Figma file key from the URL",
              },
            },
            required: ["file_key"],
          },
        },
        {
          name: "get_figma_components",
          description: "Get all components from a Figma file",
          inputSchema: {
            type: "object",
            properties: {
              file_key: {
                type: "string",
                description: "The Figma file key from the URL",
              },
            },
            required: ["file_key"],
          },
        },
        {
          name: "get_figma_styles",
          description: "Get all styles (colors, text, effects) from a Figma file",
          inputSchema: {
            type: "object",
            properties: {
              file_key: {
                type: "string",
                description: "The Figma file key from the URL",
              },
            },
            required: ["file_key"],
          },
        },
        {
          name: "export_figma_node",
          description: "Export a specific node as an image (PNG, JPG, SVG, PDF)",
          inputSchema: {
            type: "object",
            properties: {
              file_key: {
                type: "string",
                description: "The Figma file key from the URL",
              },
              node_id: {
                type: "string",
                description: "The node ID to export",
              },
              format: {
                type: "string",
                enum: ["png", "jpg", "svg", "pdf"],
                description: "Export format",
                default: "png",
              },
              scale: {
                type: "number",
                description: "Scale factor (1-4 for PNG/JPG)",
                default: 1,
              },
            },
            required: ["file_key", "node_id"],
          },
        },
        {
          name: "get_figma_comments",
          description: "Get all comments from a Figma file",
          inputSchema: {
            type: "object",
            properties: {
              file_key: {
                type: "string",
                description: "The Figma file key from the URL",
              },
            },
            required: ["file_key"],
          },
        },
      ],
    }));

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      try {
        const { name, arguments: args } = request.params;

        if (!args) {
          throw new Error("Missing arguments");
        }

        switch (name) {
          case "get_figma_file":
            return await this.getFigmaFile(args.file_key as string);
          case "get_figma_components":
            return await this.getFigmaComponents(args.file_key as string);
          case "get_figma_styles":
            return await this.getFigmaStyles(args.file_key as string);
          case "export_figma_node":
            return await this.exportFigmaNode(
              args.file_key as string,
              args.node_id as string,
              args.format as string,
              args.scale as number
            );
          case "get_figma_comments":
            return await this.getFigmaComments(args.file_key as string);
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
          content: [
            {
              type: "text",
              text: `Error: ${errorMessage}`,
            },
          ],
        };
      }
    });

    // List resources
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => ({
      resources: [
        {
          uri: "figma://files",
          name: "Figma Files",
          description: "List of Figma files accessible with the API token",
          mimeType: "application/json",
        },
      ],
    }));

    // Read resource
    this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
      const uri = request.params.uri;

      if (uri === "figma://files") {
        return {
          contents: [
            {
              uri,
              mimeType: "application/json",
              text: JSON.stringify({
                message: "Use get_figma_file tool with a specific file_key",
              }),
            },
          ],
        };
      }

      throw new Error(`Unknown resource: ${uri}`);
    });
  }

  private async getFigmaFile(fileKey: string) {
    const response = await this.axiosInstance.get(`/files/${fileKey}`);
    const data = response.data;

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              name: data.name,
              lastModified: data.lastModified,
              version: data.version,
              thumbnailUrl: data.thumbnailUrl,
              document: this.simplifyNodes(data.document),
            },
            null,
            2
          ),
        },
      ],
    };
  }

  private simplifyNodes(node: any): any {
    return {
      id: node.id,
      name: node.name,
      type: node.type,
      children: node.children?.map((child: any) => this.simplifyNodes(child)),
    };
  }

  private async getFigmaComponents(fileKey: string) {
    const response = await this.axiosInstance.get(`/files/${fileKey}/components`);
    const components = response.data.meta.components;

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(components, null, 2),
        },
      ],
    };
  }

  private async getFigmaStyles(fileKey: string) {
    const response = await this.axiosInstance.get(`/files/${fileKey}/styles`);
    const styles = response.data.meta.styles;

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(styles, null, 2),
        },
      ],
    };
  }

  private async exportFigmaNode(
    fileKey: string,
    nodeId: string,
    format: string = "png",
    scale: number = 1
  ) {
    const response = await this.axiosInstance.get(`/images/${fileKey}`, {
      params: {
        ids: nodeId,
        format,
        scale,
      },
    });

    const imageUrl = response.data.images[nodeId];

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              nodeId,
              format,
              scale,
              imageUrl,
            },
            null,
            2
          ),
        },
      ],
    };
  }

  private async getFigmaComments(fileKey: string) {
    const response = await this.axiosInstance.get(`/files/${fileKey}/comments`);
    const comments = response.data.comments;

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(comments, null, 2),
        },
      ],
    };
  }

  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Figma MCP Server running on stdio");
  }
}

const server = new FigmaMCPServer();
server.run().catch(console.error);
