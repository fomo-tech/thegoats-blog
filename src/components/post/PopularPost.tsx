
import { getHeroPosts } from '@/lib/db/post'
import Link from 'next/link'
import React from 'react'
import PostListItem from '../PostListItem'

const PopularPost = async () => {
    const { popularPosts } = await getHeroPosts()
    return (
        <>
            {/* widget popular posts */}
            <div className="widget rounded">
                <div className="widget-header text-center">
                    <h3 className="widget-title">
                        Popular Posts
                    </h3>
                </div>
                <div className="widget-content">
                    {/* render posts */}
                    {popularPosts.map((post, index) => (
                        <PostListItem key={post.id} post={post} index={index} isShowNum />
                    ))}

                </div>
            </div>
        </>
    )
}

export default PopularPost