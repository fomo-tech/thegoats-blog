import Breadcrumb from "@/components/ Breadcrumb";
import EditorRenderer from "@/components/editor/EditorRenderer";
import MainContent from "@/components/layouts/main/MainContent";
import CommentForm from "@/components/ui/CommentForm";
import ListComment from "@/components/ui/ListComment";
import { getPostBySlug } from "@/lib/db/post";

import { mainRoutes } from "@/routes/main";
import { getReadingTime } from "@/utils/calculateReadingTime";

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type Params = Promise<{
  slug: string;
}>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Bài viết không tồn tại" };
  }

  console.log(post.content);

  return {
    title: post.seo_title || post.title,
    description: post.seo_description?.slice(0, 150) || "",
  };
}

export default async function PostSinglePage(props: { params: Params }) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();
  if (post.status !== "published") return notFound();

  const minutes = getReadingTime(post.content.blocks);

  return (
    <MainContent slugCategory={post.category?.slug}>
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: mainRoutes("home") },
          { label: post.title || "Bài viết", href: "#" },
        ]}
      />
      <div className="post post-single">
        {/* Header bài viết */}
        <div className="post-header">
          <h1 className="title mt-0 mb-3">{post.title}</h1>
          <ul className="!pl-0 meta flex items-center mb-0">
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

              {post.created_at?.toString().slice(0, 10)}
            </li>
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              {minutes} phút đọc
            </li>
          </ul>
        </div>

        {/* Hình ảnh đại diện */}
        {post.cover_image && (
          <div className="featured-image">
            <img src={post.cover_image} alt={post.title} />
          </div>
        )}

        {/* Nội dung bài viết */}
        <div className="post-content clearfix">
          <EditorRenderer content={post.content} />
        </div>

        {/* Tags */}
        <div className="post-bottom mt-4">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 col-12 text-center text-md-start">
              {post.post_tags?.length > 0 && (
                <div className="text-start">
                  {post.post_tags.map((item: any, idx: number) => (
                    <Link href={"/tag/" + item?.tag.slug} key={idx}>
                      <span className="tag me-1">#{item?.tag.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="col-md-6 col-12">
              {/* social icons */}
              <ul className="social-icons list-unstyled list-inline mb-0 float-md-end">
                <li className="list-inline-item">
                  <a href="blog-single.html#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="blog-single.html#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="blog-single.html#">
                    <i className="fab fa-tiktok" />
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href="blog-single.html#">
                    <i className="fab fa-telegram-plane" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer" data-height={50} style={{ height: "50px" }} />
      <CommentForm postId={post?.id} />
      <ListComment postId={post?.id} />
    </MainContent>
  );
}
