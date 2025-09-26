import { getPostLists } from "@/lib/db/post";
import { getPopularPosts } from "@/services/post";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

const PopularPosts = async () => {
  const { data } = await getPopularPosts({
    limit: 6,
  });

  if (!data || data.length === 0) return null;

  // Lấy post đầu tiên
  const [firstPost, ...otherPosts] = data;

  return (
    <>
      <div className="section-header">
        <h3 className="section-title">Bài viết phổ biến</h3>
      </div>
      <div className="padding-30 rounded bordered">
        <div className="row gy-5">
          {/* Cột trái - Post to */}
          <div className="col-sm-6">
            <div className="post">
              <div className="thumb rounded">
                <a
                  href={`/the-loai/${firstPost.category?.slug}`}
                  className="category-badge position-absolute"
                >
                  {firstPost?.category?.name}
                </a>
                <Link href={`/${firstPost.slug}`}>
                  <div className="inner">
                    <img
                      src={firstPost.cover_image || ""}
                      alt={firstPost.title}
                    />
                  </div>
                </Link>
              </div>
              <ul className="meta list-inline mt-4 mb-0">
                {/* <li className="list-inline-item">
                  <Link href="#">
                    <img
                      src={firstPost.}
                      className="author"
                      alt={firstPost.author_name}
                    />
                    {firstPost.author_name}
                  </Link>
                </li> */}
                <li className="flex items-center gap-1">
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

                  {format(new Date(firstPost.published_at), "dd/MM/yyyy HH:mm")}
                </li>
              </ul>
              <h5 className="post-title mb-3 mt-3">
                <a href={`/${firstPost.slug}`}>{firstPost.title}</a>
              </h5>
              <p className="excerpt mb-0">{firstPost.excerpt}</p>
            </div>
          </div>

          {/* Cột phải - Các post nhỏ */}
          <div className="col-sm-6">
            {otherPosts.map((post, idx) => (
              <div key={idx} className="post post-list-sm square">
                <div className="thumb rounded">
                  <Link href={`/${post.slug}`}>
                    <div className="inner">
                      <img src={post.cover_image || ""} alt={post.title} />
                    </div>
                  </Link>
                </div>
                <div className="details clearfix">
                  <h6 className="post-title my-0">
                    <Link href={`/${post.slug}`}>{post.title}</Link>
                  </h6>
                  <ul className="meta list-inline mt-1 mb-0">
                    <li className="list-inline-item">
                      {format(new Date(post.published_at), "dd/MM/yyyy HH:mm")}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularPosts;
