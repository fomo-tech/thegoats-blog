import { getAllTags } from "@/lib/db/tag";
import Link from "next/link";
import React from "react";

interface TagsPostProps {
  tagCategrory?: string;
}
const TagsPost = async ({ tagCategrory }: TagsPostProps) => {
  const tags = await getAllTags(); // Assuming you have a function to fetch tags
  if (!tags || tags.length === 0) {
    return <div>No tags available</div>;
  }

  // Lọc bỏ category có slug trùng
  const filtered = tags.filter((c) => c.slug !== tagCategrory);

  // Shuffle categories
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);

  // Lấy 5 cái random
  const randomCategories = shuffled.slice(0, 10);

  return (
    <>
      {/* widget tags */}
      <div className="widget rounded">
        <div className="widget-header text-center">
          <h3 className="widget-title">Thẻ bài viết</h3>
        </div>
        <div className="widget-content gap-1 flex items-center flex-wrap">
          {randomCategories.map((tag) => (
            <Link href={`/tag/${tag.slug}`} className="tag" key={tag?.id}>
              #{tag?.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default TagsPost;
