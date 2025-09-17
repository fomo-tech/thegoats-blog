import { getPostLists } from '@/lib/db/post'
import Link from 'next/link'
import React from 'react'

const LatestPost = async () => {
    const { latestPosts } = await getPostLists() as any
    if (!latestPosts || latestPosts.length === 0) return null

    return (
        <>
            <div className="section-header">
                <h3 className="section-title">Bài viết mới nhất</h3>
            </div>
            <div className="padding-30 rounded bordered">
                <div className="row">
                    {latestPosts.map((post: any) => (
                        <div className="col-md-12 col-sm-6" key={post.id}>
                            <div className="post post-list clearfix">
                                <div className="thumb rounded">
                                    <Link href={`/${post.slug}`}>
                                        <div className="inner">
                                            <img src={post.cover_image} alt={post.title} />
                                        </div>
                                    </Link>
                                </div>
                                <div className="details">
                                    <ul className="meta list-inline mb-3">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <img
                                                    src={post.author_avatar}
                                                    className="author"
                                                    alt={post.author_name}
                                                />
                                                {post.author_name}
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            {new Date(post.published_at).toLocaleDateString()}
                                        </li>
                                    </ul>
                                    <h5 className="post-title">
                                        <Link href={`/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h5>
                                    <p className="excerpt mb-0">
                                        {post.seo_description}
                                    </p>
                                    <div className="post-bottom clearfix d-flex align-items-center">
                                        <div className="social-share me-auto">
                                            <ul className="icons list-unstyled list-inline mb-0 visible">
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="fab fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="fab fa-twitter" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="fab fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link href="#">
                                                        <i className="fab fa-pinterest" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="fab fa-telegram-plane" />
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="#">
                                                        <i className="far fa-envelope" />
                                                    </a>
                                                </li >
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default LatestPost       
