import { getHeroPosts } from "@/lib/db/post";
import Link from "next/link";
import PostTabs from "../PostTabs";

export default async function HeroSection() {
  const { featuredPost, popularPosts, recentPosts } =
    (await getHeroPosts()) as any;

  if (!featuredPost || !popularPosts || !recentPosts) return null;

  return (
    <section id="hero">
      <div className="mx-auto px-4 container-xl">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Featured post */}
          <div className="md:w-2/3">
            <div className="post featured-post-lg">
              <div className="details clearfix">
                <div className="category-badge">
                  {featuredPost.category?.name}
                </div>
                <h2 className="post-title">
                  <Link href={`/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>
                <ul className="meta list-inline mb-0">
                  {/* <li className="list-inline-item">
                    {featuredPost.author?.name}
                  </li> */}
                  <li className="list-inline-item !flex !items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>

                    {new Date(featuredPost?.published_at).toLocaleString()}
                  </li>
                </ul>
              </div>
              <Link href={`/${featuredPost.slug}`}>
                <div className="thumb rounded">
                  <div
                    className="inner data-bg-image"
                    style={{
                      backgroundImage: `url('${featuredPost?.cover_image}')`,
                    }}
                  ></div>
                </div>
              </Link>
            </div>
          </div>

          {/* Tabs */}
          <div className="md:w-1/3">
            <PostTabs popularPosts={popularPosts} recentPosts={recentPosts} />
          </div>
        </div>
      </div>
    </section>
  );
}
