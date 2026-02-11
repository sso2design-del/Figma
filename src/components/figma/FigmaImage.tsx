import React, { useEffect, useState } from 'react';
import { useFigmaExport } from '../../hooks/useFigma';
import { FigmaExportSettings } from '../../lib/figma-client';
import { ImageWithFallback } from './ImageWithFallback';

export interface FigmaImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  fileKey: string;
  nodeId: string;
  apiToken?: string;
  exportSettings?: FigmaExportSettings;
  fallbackSrc?: string;
}

/**
 * Component for rendering Figma nodes as images
 * Automatically exports and displays nodes from Figma files
 */
export function FigmaImage({
  fileKey,
  nodeId,
  apiToken,
  exportSettings,
  fallbackSrc,
  ...imgProps
}: FigmaImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(fallbackSrc || null);
  const { exportNode, loading, error } = useFigmaExport(fileKey, { apiToken });

  useEffect(() => {
    if (apiToken) {
      exportNode(nodeId, exportSettings).then((url) => {
        if (url) {
          setImageUrl(url);
        }
      });
    }
  }, [fileKey, nodeId, apiToken, exportSettings, exportNode]);

  if (error) {
    console.error('Failed to export Figma node:', error);
  }

  if (loading && !imageUrl) {
    return (
      <div
        className="animate-pulse bg-gray-200 rounded"
        style={{ width: imgProps.width || 'auto', height: imgProps.height || 'auto' }}
      />
    );
  }

  if (!imageUrl) {
    return <ImageWithFallback {...imgProps} src="" alt={imgProps.alt || 'Figma image'} />;
  }

  return <ImageWithFallback {...imgProps} src={imageUrl} />;
}
