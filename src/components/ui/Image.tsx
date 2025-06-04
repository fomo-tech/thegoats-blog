/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';

type ImageProps = {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    priority?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onLoad?: () => void;
    onError?: () => void;
    placeholder?: string;
};

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    width = '100%',
    height = 'auto',
    objectFit = 'cover',
    priority = false,
    className = '',
    style,
    onLoad,
    onError,
    placeholder,
}) => {
    const [loaded, setLoaded] = React.useState(false);

    return (
        <div
            style={{
                position: 'relative',
                width,
                height,
                overflow: 'hidden',
                ...style,
            }}
            className={className}
        >
            {!loaded && placeholder && (
                <img
                    src={placeholder}
                    alt="placeholder"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit,
                        filter: 'blur(10px)',
                        transition: 'opacity 0.3s',
                    }}
                />
            )}

            <img
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit,
                    transition: 'opacity 0.3s',
                    opacity: loaded ? 1 : 0,
                }}
                loading={priority ? 'eager' : 'lazy'}
                onLoad={() => {
                    setLoaded(true);
                    onLoad?.();
                }}
                onError={onError}
            />
        </div>
    );
};
