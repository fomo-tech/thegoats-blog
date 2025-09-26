import { getPostLists } from "@/lib/db/post";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getTrendingPosts } from "@/services/post";

const TrendingPosts = async () => {
  const { data: trendingPosts } = await getTrendingPosts({ limit: 6 });

  if (!trendingPosts || trendingPosts.length === 0) return null;

  // Chia thành 2 nhóm: mỗi nhóm 1 post lớn + 2 post nhỏ
  const group1 = trendingPosts.slice(0, 3);
  const group2 = trendingPosts.slice(3, 6);

  const renderLargePost = (post: any) => (
    <div className="post">
      <div className="thumb rounded">
        <Link
          href={`/the-loai/${post.category?.name || ""}`}
          className="category-badge position-absolute"
        >
          {post.category?.name || "Uncategorized"}
        </Link>

        <Link href={`/post/${post.slug}`}>
          <div className="inner h-[250px]">
            <Image
              src={post.cover_image || "/images/default.jpg"}
              alt={post.title}
              fill
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </Link>
      </div>
      <ul className="meta list-inline mt-4 mb-0">
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

          {new Date(post.published_at).toLocaleDateString("vi-VN")}
        </li>
      </ul>
      <h5 className="post-title mb-3 mt-3">
        <Link href={`/${post.slug}`}>{post.title}</Link>
      </h5>
      {post.excerpt && <p className="excerpt mb-0">{post.excerpt}</p>}
    </div>
  );

  const renderSmallPost = (post: any) => (
    <div className="post post-list-sm square before-seperator" key={post.id}>
      <div className="thumb rounded">
        <Link href={`/${post.slug}`}>
          <div className="inner">
            <Image
              src={post.cover_image || "/images/default.jpg"}
              alt={post.title}
              width={100}
              height={70}
              className="object-cover"
            />
          </div>
        </Link>
      </div>
      <div className="details clearfix">
        <h6 className="post-title my-0">
          <Link href={`/${post.slug}`}>{post.title}</Link>
        </h6>
        <ul className="meta list-inline mt-1 mb-0">
          <li className="list-inline-item">
            {new Date(post.published_at).toLocaleDateString("vi-VN")}
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <div className="section-header">
        <h3 className="section-title">Xu hướng hôm nay</h3>
      </div>
      <div className="padding-30 rounded bordered">
        <div className="row gy-5">
          <div className="col-sm-6">
            {group1[0] && renderLargePost(group1[0])}
            {group1.slice(1).map(renderSmallPost)}
          </div>
          <div className="col-sm-6">
            {group2[0] && renderLargePost(group2[0])}
            {group2.slice(1).map(renderSmallPost)}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingPosts;
