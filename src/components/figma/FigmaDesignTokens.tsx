import React from 'react';
import { useFigmaStyles } from '../../hooks/useFigma';
import { Card } from '../ui/card';

export interface FigmaDesignTokensProps {
  fileKey: string;
  apiToken?: string;
  styleType?: 'FILL' | 'TEXT' | 'EFFECT' | 'GRID';
}

/**
 * Component for displaying Figma design tokens (styles)
 * Shows colors, text styles, effects, and grid styles from a Figma file
 */
export function FigmaDesignTokens({ fileKey, apiToken, styleType }: FigmaDesignTokensProps) {
  const { data: styles, loading, error } = useFigmaStyles(fileKey, { apiToken });

  if (loading) {
    return <div className="p-4 text-center">Loading design tokens...</div>;
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-500">
        Failed to load design tokens: {error.message}
      </div>
    );
  }

  const filteredStyles = styleType
    ? styles.filter((style) => style.styleType === styleType)
    : styles;

  if (filteredStyles.length === 0) {
    return <div className="p-4 text-center text-gray-500">No design tokens found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {filteredStyles.map((style) => (
        <Card key={style.key} className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{style.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{style.styleType}</p>
              {style.description && (
                <p className="text-xs text-gray-600 mt-2">{style.description}</p>
              )}
            </div>
            {style.styleType === 'FILL' && (
              <div className="w-8 h-8 rounded border border-gray-300 ml-2" />
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
