"use client";

import Pagination from "@/components/ui/Pagination";
import { getPopularPosts } from "@/services/post";
import { Post, PostListItem } from "@/types/post";
import { handleSubmitWithErrorHandling } from "@/utils/asyncHelpers";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const PopularContainer = () => {
  const [posts, setPosts] = useState<PostListItem[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const getPostsPopular = async (page: number) => {
    const res = (await handleSubmitWithErrorHandling(
      () =>
        getPopularPosts({
          limit: 10,
          page,
        }),
      (err) => toast.error(err.message)
    )) as any;

    if (res) {
      console.log(res);

      setPosts(res.data || []);
      setTotal(res.count || 0);
    }
  };

  useEffect(() => {
    getPostsPopular(page);
  }, [page]);

  if (!posts || posts.length === 0) return null;
  return (
    <>
      {
        <div className="padding-30 rounded bordered">
          <div className="row">
            {posts.map((post) => (
              <div className="col-md-12 col-sm-6" key={post.id}>
                {/* post */}
                <div className="post post-list clearfix">
                  <div className="thumb rounded">
                    {/* <span className="post-format-sm">
                      <i className="icon-picture" />
                    </span> */}
                    <Link href={`/${post.slug}`}>
                      <div className="inner">
                        <Image
                          src={post.cover_image || ""}
                          alt={post.title}
                          width={265}
                          height={160}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="details">
                    <ul className="meta list-inline mb-3">
                      <li className="list-inline-item">
                        <Link
                          href={`/the-loai/${post.category?.slug}`}
                          className="category-badge !text-[10px] !text-[#fff]"
                        >
                          {post.category?.name}
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        {format(
                          new Date(post.published_at),
                          "dd/MM/yyyy HH:mm"
                        )}
                      </li>
                    </ul>
                    <h5 className="post-title">
                      <Link href={`/${post.slug}`}>{post.title}</Link>
                    </h5>
                    <p className="excerpt mb-0">{post.excerpt}</p>
                    <div className="post-bottom clearfix d-flex align-items-center">
                      {/* <div className="social-share me-auto">
                        <button className="toggle-button icon-share" />
                        <ul className="icons list-unstyled list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="index.html#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="index.html#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="index.html#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="index.html#">
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="index.html#">
                              <i className="fab fa-telegram-plane" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="index.html#">
                              <i className="far fa-envelope" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="more-button float-end">
                        <a href="blog-single.html">
                          <span className="icon-options" />
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
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

export default PopularContainer;
