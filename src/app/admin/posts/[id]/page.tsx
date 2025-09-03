'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getPostById } from '@/lib/db/post'
import type { Post } from '@/lib/db/post'
import PageContent from '@/components/ui/admin/PageContent'
import EditorRenderer from '@/components/editor/EditorRenderer'
import { adminRoutes } from '@/routes/admin'

const PostSingle = () => {
    const params = useParams()
    const postId = params?.id as string

    const [post, setPost] = useState<Post | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            if (!postId) return
            const data = await getPostById(postId)
            setPost(data)
            setLoading(false)
        }
        fetchPost()
    }, [postId])

    if (loading) return <div>Đang tải...</div>
    if (!post) return <div>Không tìm thấy bài viết</div>

    return (
        <PageContent title={"Review bài viết"} breadcrumbs={[{
            label: "Bài viết",
            href: adminRoutes('posts.all')
        },
        {
            label: post.title,
        },
        ]}>
            <div className="max-w-3xl mx-auto p-4">
                <p className="text-gray-600 text-sm mb-4">{new Date(post.created_at).toLocaleDateString()}</p>
                <EditorRenderer content={post.content} />
            </div>
        </PageContent>

    )
}

export default PostSingle
