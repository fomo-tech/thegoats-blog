import { getHeroPosts } from '@/lib/db/post'
import Link from 'next/link'
import PostTabs from '../PostTabs'


export default async function HeroSection() {
    const { featuredPost, popularPosts, recentPosts } = await getHeroPosts()

    if (!featuredPost || !popularPosts || !recentPosts) return null

    return (
        <section id="hero">
            <div className="mx-auto px-4 container-xl">
                <div className="flex flex-col md:flex-row gap-6">

                    {/* Featured post */}
                    <div className="md:w-2/3">
                        <div className="post featured-post-lg">
                            <div className="details clearfix">
                                <a className="category-badge">{featuredPost.category?.name}</a>
                                <h2 className="post-title">
                                    <Link href={`/${featuredPost.slug}`}>{featuredPost.title}</Link>
                                </h2>
                                <ul className="meta list-inline mb-0">
                                    <li className="list-inline-item">{featuredPost.author?.name}</li>
                                    <li className="list-inline-item">{new Date(featuredPost?.published_at).toLocaleString()}</li>
                                </ul>
                            </div>
                            <Link href={`/${featuredPost.slug}`}>
                                <div className="thumb rounded">
                                    <div
                                        className="inner data-bg-image"
                                        style={{ backgroundImage: `url('${featuredPost?.cover_image}')` }}
                                    ></div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="md:w-1/3">
                        <PostTabs
                            popularPosts={popularPosts}
                            recentPosts={recentPosts}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
