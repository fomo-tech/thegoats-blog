
import Breadcrumb from '@/components/ Breadcrumb'
import EditorRenderer from '@/components/editor/EditorRenderer'
import SidebarWidget from '@/components/layouts/main/SidebarWidget'
import CategoriesPost from '@/components/post/CategoriesPost'
import PopularPost from '@/components/post/PopularPost'
import TagsPost from '@/components/post/TagsPost'
import { getPostBySlug } from '@/lib/db/post'
import { mainRoutes } from '@/routes/main'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

type Params = Promise<{
    slug: string
}>

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const { slug } = await props.params
    const post = await getPostBySlug(slug)

    if (!post) {
        return { title: 'Bài viết không tồn tại' }
    }

    return {
        title: post.seo_title || post.title,
        description: post.seo_description?.slice(0, 150) || '',
    }
}


export default async function PostSinglePage(props: { params: Params }) {
    const { slug } = await props.params
    const post = await getPostBySlug(slug)

    if (!post) return notFound()
    if (post.status !== 'published') return notFound()




    return (
        <section className="main-content mt-3">
            <div className="container-xl">
                <Breadcrumb
                    items={[
                        { label: 'Trang chủ', href: mainRoutes('home') },
                        { label: post.title || 'Bài viết', href: '#' },
                    ]}
                />

                <div className="row gy-4">
                    <div className="col-lg-8">
                        <div className="post post-single">
                            {/* Header bài viết */}
                            <div className="post-header">
                                <h1 className="title mt-0 mb-3">{post.title}</h1>
                                <ul className="meta list-inline mb-0">
                                    <li className="list-inline-item">
                                        {post.created_at?.toString().slice(0, 10)}
                                    </li>
                                </ul>
                            </div>

                            {/* Hình ảnh đại diện */}
                            {post.cover_image && (
                                <div className="featured-image">
                                    <img src={post.cover_image} alt={post.title} />
                                </div>
                            )}

                            {/* Nội dung bài viết */}
                            <div className="post-content clearfix">
                                <EditorRenderer content={post.content} />
                            </div>

                            {/* Tags */}
                            <div className="post-bottom mt-4">
                                <div className='row d-flex align-items-center'>
                                    <div className='col-md-6 col-12 text-center text-md-start'>
                                        {post.post_tags?.length > 0 && (
                                            <div className="text-start">
                                                {post.post_tags.map((item: any, idx: number) => (
                                                    <span key={idx} className="tag me-1">
                                                        #{item?.tag.name}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-md-6 col-12">
                                        {/* social icons */}
                                        <ul className="social-icons list-unstyled list-inline mb-0 float-md-end">
                                            <li className="list-inline-item">
                                                <a href="blog-single.html#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="blog-single.html#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="blog-single.html#">
                                                    <i className="fab fa-linkedin-in" />
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="blog-single.html#">
                                                    <i className="fab fa-pinterest" />
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="blog-single.html#">
                                                    <i className="fab fa-telegram-plane" />
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="blog-single.html#">
                                                    <i className="far fa-envelope" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="spacer" data-height={50} style={{ height: '50px' }} />

                    </div>
                    <div className="col-lg-4">
                        <SidebarWidget />
                    </div>
                </div>
            </div>
        </section>
    )
}
