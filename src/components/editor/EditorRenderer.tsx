'use client'

import React from 'react'

interface EditorBlock {
    id?: string
    type: string
    data: any
}

interface Props {
    content: {
        blocks: EditorBlock[]
    }
}

const BlockRenderer = (block: EditorBlock, index: number) => {
    const { type, data } = block

    switch (type) {
        case 'paragraph':
            return (
                <p
                    key={index}
                    className=""
                    dangerouslySetInnerHTML={{ __html: data.text }}
                />
            )

        case 'header': {
            const Tag = `h${data.level}` as any
            const headerClass = {
                1: 'text-3xl font-bold mt-6 mb-4',
                2: 'text-2xl font-semibold mt-5 mb-3',
                3: 'text-xl font-medium mt-4 mb-2',
                4: 'text-lg font-medium mt-3 mb-2',
                5: 'text-base font-medium mt-2 mb-1',
                6: 'text-sm font-medium mt-1 mb-1'
            }[data.level] || 'text-xl font-semibold my-4'

            return (
                <Tag key={index} className={`${headerClass} text-gray-900 dark:text-gray-100`}>
                    {data.text}
                </Tag>
            )
        }

        case 'list':
            return (
                <ul
                    key={index}
                    className={`${data.style === 'unordered' ? 'list-disc' : 'list-decimal'
                        }`}
                >
                    {data.items.map((item: any, i: number) => (
                        <li key={i} >
                            {item?.content}
                        </li>
                    ))}
                </ul>
            )

        case 'checklist':
            return (
                <div key={index} className="my-4 space-y-2">
                    {data.items.map((item: any, i: number) => (
                        <label key={i} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={item.checked}
                                readOnly
                                className="form-checkbox accent-blue-600"
                            />
                            <span dangerouslySetInnerHTML={{ __html: item.text }} />
                        </label>
                    ))}
                </div>
            )

        case 'image':
            return (
                <div key={index} className="my-6 text-center">
                    <img
                        src={data.file?.url}
                        alt={data.caption || ''}
                        className="mx-auto rounded-md shadow-md"
                    />
                    {data.caption && (
                        <p className="mt-2 text-sm text-gray-500 italic">{data.caption}</p>
                    )}
                </div>
            )

        case 'quote':
            return (
                <blockquote
                    key={index}
                    className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-300 my-4"
                >
                    {data.text}
                </blockquote>
            )

        case 'code':
            return (
                <pre
                    key={index}
                    className="bg-gray-200  text-sm p-4 rounded-md overflow-x-auto my-4 text-gray-500 "
                >
                    <code>{data.code}</code>
                </pre>
            )

        case 'delimiter':
            return <hr key={index} className="my-8 border-gray-300 dark:border-gray-600" />

        case 'embed':
            return (
                <div key={index} className="my-6">
                    <iframe
                        className="w-full aspect-video rounded-md"
                        src={data.embed}
                        title={data.caption || 'Embedded content'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    {data.caption && (
                        <p className="text-sm text-gray-500 italic mt-2 text-center">{data.caption}</p>
                    )}
                </div>
            )

        case 'raw':
            return (
                <div
                    key={index}
                    className="my-4"
                    dangerouslySetInnerHTML={{ __html: data.html }}
                />
            )

        default:
            return null
    }
}

const EditorRenderer: React.FC<Props> = ({ content }) => {
    if (!content?.blocks?.length) return null

    return (
        <div className="w-full prose dark:prose-invert max-w-none">
            {content.blocks.map((block, i) => BlockRenderer(block, i))}
        </div>
    )
}

export default EditorRenderer
