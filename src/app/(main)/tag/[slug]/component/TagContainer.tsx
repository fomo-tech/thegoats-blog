"use client";

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
        {posts.length === 0 && (
          <p className="text-center w-full">No posts found.</p>
        )}

        {posts.map((post) => (
          <div className="col-sm-6" key={post.id}>
            {/* post */}
            <div className="post post-grid rounded bordered">
              <div className="thumb top-rounded">
                <Link
                  href={`/category/${post.category?.slug}`}
                  className="category-badge position-absolute"
                >
                  {post.category?.name || "Category"}
                </Link>
                {post?.cover_image && (
                  <Link href={`/${post?.slug}`}>
                    <div className="inner">
                      <img src={post?.cover_image} alt={post?.title} />
                    </div>
                  </Link>
                )}
              </div>
              <div className="details">
                <ul className="meta list-inline mb-0">
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
                  <li className="list-inline-item">
                    {new Date(post.created_at).toLocaleDateString()}
                  </li>
                </ul>
                <h5 className="post-title mb-3 mt-3">
                  <Link href={`/${post.slug}`}>{post.title}</Link>
                </h5>
                <p className="excerpt mb-0">{post.excerpt}</p>
              </div>
            </div>
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
