"use client";

import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Post {
  id: string;
  slug: string;
  title: string;
  cover_image: string;
  published_at: string;
}

interface PostListItemProps {
  post: Post;
  index: number;
  isShowNum?: boolean;
}

const PostListItem: React.FC<PostListItemProps> = ({
  post,
  index,
  isShowNum,
}) => {
  if (!post) return null;

  // Format the date for display

  return (
    <div
      key={post.id}
      className="post post-list-sm circle"
      style={{
        height: "95px",
      }}
    >
      <div className="thumb circle">
        {isShowNum && <span className="number">{index + 1}</span>}

        <Link href={`/${post.slug}`}>
          <div className="h-[50px] w-[70px] !rounded-[8px]">
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              quality={100}
              className="w-full h-full  !rounded-[8px]"
            />
          </div>
        </Link>
      </div>
      <div className="details clearfix">
        <h6 className="post-title my-0">
          <Link href={`/${post.slug}`}>{post.title}</Link>
        </h6>
        <ul className="meta list-inline mt-1 mb-0">
          <li className="list-inline-item !flex items-center gap-1">
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
            {format(post.published_at, "dd/MM/yyyy")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostListItem;
