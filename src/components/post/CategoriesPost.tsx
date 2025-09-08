import { getAllCategories } from '@/lib/db/categories'
import React from 'react'

const CategoriesPost = async () => {
    const categories = await getAllCategories()
    if (!categories || categories.length === 0) {
        return <div>No categories available</div>
    }

    // Render categories as a list
    return (
        <>
            {/* widget categories */}
            <div className="widget rounded">
                <div className="widget-header text-center">
                    <h3 className="widget-title">Khám phá thể loại khác</h3>
                </div>
                <div className="widget-content">
                    {/* Render each category */}
                    <ul className="list">
                        {categories.map((category) => (
                            <li key={category.id}>
                                <a href={`/category/${category?.slug}`}>
                                    {category.name}
                                </a>

                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </>
    )
}

export default CategoriesPost