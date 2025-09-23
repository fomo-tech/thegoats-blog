"use client";

import React from "react";
import Link from "next/link";

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
    <div className="post post-grid rounded bordered">
      <div className="thumb top-rounded">
        {/* category */}
        {post.category && (
          <Link
            href={`/category/${post.category.slug}`}
            className="category-badge position-absolute"
          >
            {post.category.name}
          </Link>
        )}

        {/* cover image */}
        {post.cover_image && (
          <Link href={`/${post.slug}`}>
            <div className="inner">
              <img src={post.cover_image} alt={post.title} />
            </div>
          </Link>
        )}
      </div>

      {/* details */}
      <div className="details">
        <ul className="meta list-inline mb-0">
          {/* author */}
          <li className="list-inline-item">
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
          </li>
          {/* created date */}
          <li className="list-inline-item">
            {new Date(post.created_at).toLocaleDateString()}
          </li>
        </ul>

        {/* title */}
        <h5 className="post-title mb-3 mt-3">
          <Link href={`/${post.slug}`}>{post.title}</Link>
        </h5>

        {/* excerpt */}
        {post.excerpt && <p className="excerpt mb-0">{post.excerpt}</p>}
      </div>
    </div>
  );
};

export default PostCard;
