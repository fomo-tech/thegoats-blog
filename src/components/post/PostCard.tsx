"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PostCardProps {
  post: {
    slug: string;
    title: string;
    excerpt?: string;
    cover_image?: string;
    created_at: string;
    category?: {
      slug: string;
      name: string;
    };
    author?: {
      name: string;
      avatar?: string;
    };
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="post post-grid rounded  overflow-hidden bordered h-full">
      <div className="thumb top-rounded ">
        {/* category */}
        {post.category && (
          <Link
            href={`/the-loai/${post.category.slug}`}
            className="category-badge position-absolute"
          >
            {post.category.name}
          </Link>
        )}

        {/* cover image */}
        {post.cover_image && (
          <Link href={`/${post.slug}`}>
            <div className="inner w-[500px] h-[250px] ">
              <Image
                fill
                className="w-full h-full "
                src={post.cover_image}
                alt={post.title}
              />
            </div>
          </Link>
        )}
      </div>

      {/* details */}
      <div className="details">
        <ul className="meta list-inline mb-0">
          {/* author */}
          {/* <li className="list-inline-item">
            <a href="#">
              {post.author?.avatar && (
                <img
                  src={post.author.avatar}
                  className="author"
                  alt={post.author.name}
                />
              )}
              {post.author?.name || "Unknown"}
            </a>
          </li> */}
          {/* created date */}
          <li className="list-inline-item !flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>

            {new Date(post.created_at).toLocaleDateString()}
          </li>
        </ul>

        {/* title */}
        <h5 className="post-title mb-3 mt-3">
          <Link href={`/${post.slug}`}>{post.title}</Link>
        </h5>

        {/* excerpt */}
        {post.excerpt && (
          <p className="excerpt mb-0 line-clamp-3">{post.excerpt}</p>
        )}
      </div>
    </div>
  );
};

export default PostCard;
