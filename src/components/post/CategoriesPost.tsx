import { getAllCategories } from "@/lib/db/categories";
import Link from "next/link";
import React from "react";

interface CategoriesPostProps {
  currentSlug?: string;
}

const CategoriesPost = async ({ currentSlug }: CategoriesPostProps) => {
  const categories = await getAllCategories();
  if (!categories || categories.length === 0) {
    return <div>No categories available</div>;
  }

  // Lọc bỏ category có slug trùng
  const filtered = categories.filter((c) => c.slug !== currentSlug);

  // Shuffle categories
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);

  // Lấy 5 cái random
  const randomCategories = shuffled.slice(0, 5);

  return (
    <>
      {/* widget categories */}
      <div className="widget rounded">
        <div className="widget-header text-center">
          <h3 className="widget-title">Thể loại</h3>
        </div>
        <div className="widget-content">
          <ul className="list">
            {randomCategories.map((category) => (
              <li key={category.id}>
                <Link href={`/the-loai/${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoriesPost;
