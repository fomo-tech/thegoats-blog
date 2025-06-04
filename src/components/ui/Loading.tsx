'use client';

import React from 'react';

interface PropsLoading {
    color?: string;
    size?: number | string;
}

const Loading: React.FC<PropsLoading> = ({
    color = '#000',
    size = 40,
}) => {
    return (
        <div
            className="spinner"
            style={{
                width: size,
                height: size,
                borderWidth: sizeToBorder(size),
                borderTopColor: color,
            }}
        />
    );
};

// Tự động tính độ dày của viền dựa theo size (ví dụ size = 40 => border = 4px)
const sizeToBorder = (size: number | string) => {
    const num = typeof size === 'number' ? size : parseInt(size);
    return `${Math.max(Math.floor(num / 10), 2)}px`;
};

export default Loading;
