"use client";

import { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import PostListItem from "./PostListItem";

export default function PostTabs({
  featuredPosts,
  recentPosts,
}: {
  featuredPosts: any[];
  recentPosts: any[];
}) {
  const [activeTab, setActiveTab] = useState<"popular" | "recent">("recent");

  const renderPosts = (posts: any[]) => (
    <>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} index={0} />
      ))}
    </>
  );

  return (
    <div className="post-tabs rounded bordered">
      <ul className="nav nav-tabs nav-pills nav-fill" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`font-[500] nav-link ${
              activeTab === "recent" ? "active" : ""
            }`}
            onClick={() => setActiveTab("recent")}
          >
            Mới nhất
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`font-[500] nav-link ${
              activeTab === "popular" ? "active" : ""
            }`}
            onClick={() => setActiveTab("popular")}
          >
            Nổi bật
          </button>
        </li>
      </ul>

      <div className="tab-content">
        <div className="tab-pane fade show active">
          {activeTab === "popular"
            ? renderPosts(featuredPosts)
            : renderPosts(recentPosts)}
        </div>
      </div>
    </div>
  );
}
