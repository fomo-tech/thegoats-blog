'use client'

import CategoriesPost from '@/components/post/CategoriesPost'
import PopularPost from '@/components/post/PopularPost'
import TagsPost from '@/components/post/TagsPost'
import React from 'react'


const SidebarWidget = () => {
    return (
        <>

            {/* widget advertisement */}
            <div className="widget no-container rounded text-md-center">
                <span className="ads-title">- Quảng cáo được tài trợ -</span>
                <a href="blog-single.html#" className="widget-ads">
                    <img src="https://placehold.co/600x400" alt="Advertisement" />
                </a>
            </div>
            {/* <PopularPost />
            <CategoriesPost />
            <TagsPost /> */}

        </>
    )
}

export default SidebarWidget