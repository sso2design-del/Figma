import { useState, useEffect, useCallback } from 'react';
import {
  FigmaClient,
  FigmaFile,
  FigmaComponent,
  FigmaStyle,
  FigmaExportSettings,
} from '../lib/figma-client';

export interface UseFigmaOptions {
  apiToken?: string;
  autoFetch?: boolean;
}

/**
 * Hook for fetching Figma file data
 */
export function useFigmaFile(fileKey: string, options: UseFigmaOptions = {}) {
  const [data, setData] = useState<FigmaFile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async () => {
    if (!options.apiToken) {
      setError(new Error('Figma API token is required'));
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const client = new FigmaClient(options.apiToken);
      const fileData = await client.getFile(fileKey);
      setData(fileData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  }, [fileKey, options.apiToken]);

  useEffect(() => {
    if (options.autoFetch !== false) {
      fetch();
    }
  }, [fetch, options.autoFetch]);

  return { data, loading, error, refetch: fetch };
}

/**
 * Hook for fetching Figma components
 */
export function useFigmaComponents(fileKey: string, options: UseFigmaOptions = {}) {
  const [data, setData] = useState<FigmaComponent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async () => {
    if (!options.apiToken) {
      setError(new Error('Figma API token is required'));
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const client = new FigmaClient(options.apiToken);
      const components = await client.getComponents(fileKey);
      setData(components);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  }, [fileKey, options.apiToken]);

  useEffect(() => {
    if (options.autoFetch !== false) {
      fetch();
    }
  }, [fetch, options.autoFetch]);

  return { data, loading, error, refetch: fetch };
}

/**
 * Hook for fetching Figma styles
 */
export function useFigmaStyles(fileKey: string, options: UseFigmaOptions = {}) {
  const [data, setData] = useState<FigmaStyle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async () => {
    if (!options.apiToken) {
      setError(new Error('Figma API token is required'));
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const client = new FigmaClient(options.apiToken);
      const styles = await client.getStyles(fileKey);
      setData(styles);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  }, [fileKey, options.apiToken]);

  useEffect(() => {
    if (options.autoFetch !== false) {
      fetch();
    }
  }, [fetch, options.autoFetch]);

  return { data, loading, error, refetch: fetch };
}

/**
 * Hook for exporting Figma nodes as images
 */
export function useFigmaExport(fileKey: string, options: UseFigmaOptions = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const exportNode = useCallback(
    async (nodeId: string, settings?: FigmaExportSettings): Promise<string | null> => {
      if (!options.apiToken) {
        setError(new Error('Figma API token is required'));
        return null;
      }

      setLoading(true);
      setError(null);

      try {
        const client = new FigmaClient(options.apiToken);
        const imageUrl = await client.exportImage(fileKey, nodeId, settings);
        return imageUrl;
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
        return null;
      } finally {
        setLoading(false);
      }
    },
    [fileKey, options.apiToken]
  );

  return { exportNode, loading, error };
}

/**
 * Hook for managing Figma client instance
 */
export function useFigmaClient(apiToken?: string) {
  const [client, setClient] = useState<FigmaClient | null>(null);

  useEffect(() => {
    if (apiToken) {
      setClient(new FigmaClient(apiToken));
    } else {
      setClient(null);
    }
  }, [apiToken]);

  return client;
}
