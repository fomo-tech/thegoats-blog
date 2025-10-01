"use client";

import PostCard from "@/components/post/PostCard";
import Pagination from "@/components/ui/Pagination";
import { getPostBySearch } from "@/lib/db/post";
import { handleSubmitWithErrorHandling } from "@/utils/asyncHelpers";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface SearchContainerProps {
  query: string;
}
const SearchContainer = ({ query }: SearchContainerProps) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const getPosts = async (page: number) => {
    const res = (await handleSubmitWithErrorHandling(
      () =>
        getPostBySearch({
          keyword: query,
          filter: {
            page,
          },
        }),
      (err) => toast.error(err.message)
    )) as any;

    if (res) {
      setPosts(res.posts || []);
      setTotal(res.total || 0);
    }
  };

  useEffect(() => {
    if (query) {
      getPosts(page);
    }
  }, [query, page]);
  return (
    <div>
      <div className="row gy-4">
        {posts.length === 0 && (
          <p className="text-center w-full">No posts found.</p>
        )}

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
    </div>
  );
};

export default SearchContainer;
