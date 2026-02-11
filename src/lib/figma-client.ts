/**
 * Figma API Client
 * Utilities for fetching data from Figma API
 */

export interface FigmaFile {
  name: string;
  lastModified: string;
  thumbnailUrl: string;
  version: string;
  document: FigmaNode;
}

export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  backgroundColor?: RGBA;
  fills?: Paint[];
  strokes?: Paint[];
}

export interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Paint {
  type: string;
  color?: RGBA;
  gradientStops?: ColorStop[];
}

export interface ColorStop {
  position: number;
  color: RGBA;
}

export interface FigmaComponent {
  key: string;
  name: string;
  description: string;
  componentSetId?: string;
}

export interface FigmaStyle {
  key: string;
  name: string;
  styleType: 'FILL' | 'TEXT' | 'EFFECT' | 'GRID';
  description: string;
}

export interface FigmaExportSettings {
  format: 'png' | 'jpg' | 'svg' | 'pdf';
  scale?: number;
  constraint?: {
    type: 'SCALE' | 'WIDTH' | 'HEIGHT';
    value: number;
  };
}

export class FigmaClient {
  private apiToken: string;
  private baseUrl = 'https://api.figma.com/v1';

  constructor(apiToken: string) {
    this.apiToken = apiToken;
  }

  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        'X-Figma-Token': this.apiToken,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get file information and node tree
   */
  async getFile(fileKey: string): Promise<FigmaFile> {
    const data = await this.fetch<any>(`/files/${fileKey}`);
    return {
      name: data.name,
      lastModified: data.lastModified,
      thumbnailUrl: data.thumbnailUrl,
      version: data.version,
      document: data.document,
    };
  }

  /**
   * Get all components from a file
   */
  async getComponents(fileKey: string): Promise<FigmaComponent[]> {
    const data = await this.fetch<any>(`/files/${fileKey}/components`);
    return data.meta.components || [];
  }

  /**
   * Get all styles from a file
   */
  async getStyles(fileKey: string): Promise<FigmaStyle[]> {
    const data = await this.fetch<any>(`/files/${fileKey}/styles`);
    return data.meta.styles || [];
  }

  /**
   * Export a node as an image
   */
  async exportImage(
    fileKey: string,
    nodeId: string,
    settings: FigmaExportSettings = { format: 'png', scale: 1 }
  ): Promise<string> {
    const params = new URLSearchParams({
      ids: nodeId,
      format: settings.format,
      ...(settings.scale && { scale: settings.scale.toString() }),
    });

    const data = await this.fetch<any>(`/images/${fileKey}?${params}`);
    return data.images[nodeId];
  }

  /**
   * Get comments from a file
   */
  async getComments(fileKey: string): Promise<any[]> {
    const data = await this.fetch<any>(`/files/${fileKey}/comments`);
    return data.comments || [];
  }

  /**
   * Get team components
   */
  async getTeamComponents(teamId: string): Promise<FigmaComponent[]> {
    const data = await this.fetch<any>(`/teams/${teamId}/components`);
    return data.meta.components || [];
  }

  /**
   * Get team styles
   */
  async getTeamStyles(teamId: string): Promise<FigmaStyle[]> {
    const data = await this.fetch<any>(`/teams/${teamId}/styles`);
    return data.meta.styles || [];
  }

  /**
   * Search for nodes in a file
   */
  searchNodes(node: FigmaNode, predicate: (node: FigmaNode) => boolean): FigmaNode[] {
    const results: FigmaNode[] = [];

    if (predicate(node)) {
      results.push(node);
    }

    if (node.children) {
      for (const child of node.children) {
        results.push(...this.searchNodes(child, predicate));
      }
    }

    return results;
  }

  /**
   * Convert RGBA to CSS color string
   */
  rgbaToCss(rgba: RGBA): string {
    const r = Math.round(rgba.r * 255);
    const g = Math.round(rgba.g * 255);
    const b = Math.round(rgba.b * 255);
    return rgba.a < 1
      ? `rgba(${r}, ${g}, ${b}, ${rgba.a})`
      : `rgb(${r}, ${g}, ${b})`;
  }

  /**
   * Convert RGBA to hex color string
   */
  rgbaToHex(rgba: RGBA): string {
    const r = Math.round(rgba.r * 255);
    const g = Math.round(rgba.g * 255);
    const b = Math.round(rgba.b * 255);
    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
}

/**
 * Create a Figma client instance
 */
export function createFigmaClient(apiToken: string): FigmaClient {
  return new FigmaClient(apiToken);
}
