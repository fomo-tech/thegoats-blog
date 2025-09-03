/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

interface Props {
    onSuccess?: (url: string) => void
    label?: string
    initialUrl?: string      // ảnh đã lưu từ backend (khi edit)
    defaultUrl?: string      // ảnh mặc định nếu chưa có ảnh nào
}

const ImageUploader: React.FC<Props> = ({ onSuccess, label, initialUrl, defaultUrl }) => {
    const [preview, setPreview] = useState<string | null>(initialUrl || null)
    const [loading, setLoading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (initialUrl) {
            setPreview(initialUrl)
        }
    }, [initialUrl])

    const handleUpload = async (file: File) => {
        setLoading(true)
        try {
            const formData = new FormData()
            formData.append('file', file)

            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            })

            const data = await res.json()
            if (data?.url) {
                setPreview(data.url)
                onSuccess?.(data.url)
            } else {
                throw new Error(data?.error || 'Upload thất bại')
            }
        } catch (err: any) {
            console.error(err)
            toast.error(err.message || 'Lỗi server khi upload ảnh', {
                position: 'top-center'
            })
        } finally {
            setLoading(false)
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            handleUpload(file)
        }
    }

    const imageToShow = preview || defaultUrl || null

    return (
        <div className="flex flex-col gap-2">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}

            <div className="flex items-center gap-4">
                <div
                    onClick={() => fileInputRef.current?.click()}
                    className={`cursor-pointer border border-dashed border-gray-400 rounded-lg px-4 py-3 text-center text-sm text-gray-600 hover:bg-gray-100 transition min-w-[150px] ${loading ? 'opacity-70 pointer-events-none' : ''
                        }`}
                >
                    {loading ? 'Đang upload...' : (imageToShow ? 'Đổi ảnh khác' : 'Chọn ảnh để upload')}
                </div>

                {imageToShow && (
                    <img
                        src={imageToShow}
                        alt="Ảnh đã chọn"
                        className="w-20 h-20 rounded object-cover border border-gray-300 shadow-sm"
                    />
                )}
            </div>

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    )
}

export default ImageUploader
