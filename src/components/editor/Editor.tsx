'use client'

import React, { useEffect, useRef } from 'react'

interface Props {
    onChange?: (data: any) => void
    data?: any
}

export default function EditorJSComponent({ onChange, data }: Props) {
    const editorRef = useRef<any>(null)
    const editorHolderRef = useRef<HTMLDivElement | null>(null)
    const hasInitializedRef = useRef<boolean>(false) // Ngăn init 2 lần

    useEffect(() => {
        if (typeof window === 'undefined' || !editorHolderRef.current || hasInitializedRef.current) return

        hasInitializedRef.current = true

        const init = async () => {
            const EditorJS = (await import('@editorjs/editorjs')).default
            const Header = (await import('@editorjs/header')).default
            const List = (await import('@editorjs/list')).default
            const Paragraph = (await import('@editorjs/paragraph')).default
            const ImageTool = (await import('@editorjs/image')).default
            const Quote = (await import('@editorjs/quote')).default
            const CodeTool = (await import('@editorjs/code')).default
            const LinkTool = (await import('@editorjs/link')).default
            const Underline = (await import('@editorjs/underline')).default
            const Marker = (await import('@editorjs/marker')).default
            const InlineCode = (await import('@editorjs/inline-code')).default
            const Delimiter = (await import('@editorjs/delimiter')).default
            const ColorPlugin = (await import('editorjs-text-color-plugin')).default
            const Embed = (await import('@editorjs/embed')).default

            const editor = new EditorJS({
                holder: editorHolderRef.current!,
                data: data || {},
                autofocus: true,
                tools: {
                    paragraph: {
                        class: Paragraph,
                        inlineToolbar: ['bold', 'italic', 'underline', 'link'],
                        config: {
                            placeholder: 'Type your text here...',
                        },
                    },
                    header: {
                        class: Header,
                        inlineToolbar: true,
                        config: {
                            placeholder: 'Enter a header',
                            levels: [1, 2, 3, 4, 5],
                            defaultLevel: 3
                        }
                    },
                    color: {
                        class: ColorPlugin,
                        config: {
                            colorCollections: [
                                '#000000', '#FF1300', '#EC7878',
                                '#9C27B0', '#673AB7', '#3F51B5',
                                '#0070FF', '#03A9F4', '#00BCD4',
                                '#4CAF50', '#8BC34A', '#CDDC39',
                                '#FFF'
                            ],
                            defaultColor: '#000000',
                            type: 'text',
                        },
                    },
                    list: {
                        class: List,
                        inlineToolbar: true,
                    },
                    image: {
                        class: ImageTool,
                        config: {
                            endpoints: {
                                byFile: '/api/upload',
                            },
                            field: "file",
                        },
                    },
                    quote: {
                        class: Quote,
                        inlineToolbar: true,
                    },
                    code: CodeTool,
                    linkTool: {
                        class: LinkTool,
                        config: {
                            endpoint: '/api/fetch-url',
                        },
                    },
                    underline: Underline,
                    marker: Marker,
                    inlineCode: InlineCode,
                    delimiter: Delimiter,
                    embed: Embed,
                },
                onChange: async () => {
                    const savedData = await editor.save()
                    onChange?.(savedData)
                },
            } as any)

            editorRef.current = editor
        }

        init()

        return () => {
            if (editorRef.current) {
                editorRef.current.destroy?.()
                editorRef.current = null
                hasInitializedRef.current = false // Reset lại để tránh leak khi chuyển trang
            }
        }
    }, [data, onChange])

    return (
        <div className="prose max-w-none border rounded-lg p-4 bg-white shadow-sm">
            <div id="editorjs" ref={editorHolderRef} />
        </div>
    )
}
