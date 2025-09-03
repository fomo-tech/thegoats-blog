
'use client'

import { format } from 'date-fns'
import React from 'react'
interface Post {
    id: string
    slug: string
    title: string
    cover_image: string
    published_at: string
}

interface PostListItemProps {
    post: Post
    index: number
    isShowNum?: boolean
}

const PostListItem: React.FC<PostListItemProps> = ({ post, index, isShowNum }) => {
    if (!post) return null

    // Format the date for display


    return (
        <div key={post.id} className="post post-list-sm circle">
            <div className="thumb circle">
                {
                    isShowNum && <span className="number">{index + 1}</span>
                }

                <a href={`/${post.slug}`}>
                    <div className="inner h-[60px] w-[60px]">
                        <img src={post.cover_image} alt={post.title} className='w-full !h-full' />
                    </div>
                </a>
            </div>
            <div className="details clearfix">
                <h6 className="post-title my-0">
                    <a href={`/${post.slug}`}>{post.title}</a>
                </h6>
                <ul className="meta list-inline mt-1 mb-0">
                    <li className="list-inline-item">{format(post.published_at, "dd/MM/yyyy HH:mm")}</li>
                </ul>
            </div>
        </div>
    )
}

export default PostListItem
