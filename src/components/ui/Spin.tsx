import React from 'react'

interface SpinProps {
    size?: number
    tip?: string
    fullscreen?: boolean
    spinning?: boolean // 🔹 mới thêm
    children?: React.ReactNode // 🔹 để bọc nội dung nếu không fullscreen
}

export default function Spin({
    size = 40,
    tip,
    fullscreen = false,
    spinning = true,
    children,
}: SpinProps) {
    const borderSize = Math.max(2, size / 8)

    if (!spinning) {
        // Nếu không spinning, chỉ render children (nếu có)
        return <>{children}</>
    }

    const spinner = (
        <div className="flex flex-col items-center justify-center">
            <div
                className="animate-spin_08s rounded-full border-t-transparent border-solid border-blue-500"
                style={{
                    width: size,
                    height: size,
                    borderWidth: borderSize,
                }}
            />
            {tip && (
                <div className="mt-2 text-gray-500 dark:text-gray-400 text-sm">{tip}</div>
            )}
        </div>
    )

    if (fullscreen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 dark:bg-black/60 backdrop-blur-sm">
                {spinner}
            </div>
        )
    }

    // Nếu không fullscreen, bọc children bên dưới spinner
    return (
        <div className="relative">
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                {spinner}
            </div>
            <div className="opacity-30 pointer-events-none select-none">{children}</div>
        </div>
    )
}
