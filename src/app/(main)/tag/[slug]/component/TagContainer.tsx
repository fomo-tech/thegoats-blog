"use client";

import PostCard from "@/components/post/PostCard";
import Empty from "@/components/ui/Empty";
import Pagination from "@/components/ui/Pagination";
import {
  getPostBySlugTagPaginate,
  getPostsBySlugCategoryPaginate,
} from "@/lib/db/post";
import { handleSubmitWithErrorHandling } from "@/utils/asyncHelpers";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface TagContainerProps {
  tagSlug: string;
}

const TagContainer = ({ tagSlug }: TagContainerProps) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const getPostsByTagSlug = async (page: number) => {
    const res = (await handleSubmitWithErrorHandling(
      () =>
        getPostBySlugTagPaginate({
          slug: tagSlug || "",
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
    if (tagSlug) {
      getPostsByTagSlug(page);
    }
  }, [tagSlug, page]);

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

export default TagContainer;
