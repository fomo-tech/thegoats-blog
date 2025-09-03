import { getAllTags } from '@/lib/db/tag';
import React from 'react'

const TagsPost = async () => {
    const tags = await getAllTags(); // Assuming you have a function to fetch tags
    if (!tags || tags.length === 0) {
        return <div>No tags available</div>
    }
    return (
        <>
            {/* widget tags */}
            <div className="widget rounded">
                <div className="widget-header text-center">
                    <h3 className="widget-title">
                        Khám phá thẻ bài viết
                    </h3>
                </div>
                <div className="widget-content">
                    {/* Render each tag */}
                    <ul className="list">
                        {tags.map((tag) => (
                            <li key={tag.id}>
                                <a href={`/tags/${tag.id}`}>
                                    #{tag.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


        </>
    )
}

export default TagsPost