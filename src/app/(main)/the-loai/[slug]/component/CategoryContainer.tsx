"use client";

import PostCard from "@/components/post/PostCard";
import Empty from "@/components/ui/Empty";
import Pagination from "@/components/ui/Pagination";
import { getPostsBySlugCategoryPaginate } from "@/lib/db/post";
import { handleSubmitWithErrorHandling } from "@/utils/asyncHelpers";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface CategoryContainerProps {
  categorySlug: string;
}

const CategoryContainer = ({ categorySlug }: CategoryContainerProps) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const getPostCategoryBySlug = async (page: number) => {
    const res = (await handleSubmitWithErrorHandling(
      () =>
        getPostsBySlugCategoryPaginate({
          slug: categorySlug || "",
          page,
        }),
      (err) => toast.error(err.message)
    )) as any;

    if (res) {
      setPosts(res.posts || []);
      setTotal(res.total || 0);
    }
  };

  useEffect(() => {
    if (categorySlug) {
      getPostCategoryBySlug(page);
    }
  }, [categorySlug, page]);

  return (
    <>
      <div className="row gy-4">
        {posts.length === 0 && <Empty />}

        {posts.map((post) => (
          <div className="col-sm-6" key={post.id}>
            {/* post */}
            <PostCard post={post} />
          </div>
        ))}
      </div>

      {total > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(total / 10)}
          onPageChange={(p) => setPage(p)}
        />
      )}
    </>
  );
};

export default CategoryContainer;
