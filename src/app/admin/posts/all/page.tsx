"use client";

import React, { useEffect, useState } from "react";
import PageContent from "@/components/ui/admin/PageContent";
import { deletePost, getPostsPaginatedWithFilters } from "@/lib/db/post";
import { getAllCategories } from "@/lib/db/categories";
import { getAllTags } from "@/lib/db/tag";
import { Column, CustomTable } from "@/components/CustomTable";
import { useRouter } from "next/navigation";
import { adminRoutes } from "@/routes/admin";
import { useNotify } from "@/components/ui/NotificationProvider";
import { handleSubmitWithErrorHandling } from "@/utils/asyncHelpers";
import { toast } from "react-toastify";
import { Post } from "@/types/post";

const PostLists = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [tagId, setTagId] = useState("");
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState<any>([]);
  const [tags, setTags] = useState<any>([]);
  const router = useRouter();
  const pageSize = 10;
  const totalPages = Math.ceil(total / pageSize);
  const { confirm } = useNotify();
  const fetchData = async () => {
    const { posts, total } = (await handleSubmitWithErrorHandling(
      () => getPostsPaginatedWithFilters({ search, categoryId, tagId, page }),
      (err) => toast.error(err.message),
      setLoading
    )) as any;
    console.log(posts);

    setPosts(posts);
    setTotal(total);
  };

  useEffect(() => {
    fetchData();
  }, [search, categoryId, tagId, page]);

  useEffect(() => {
    const loadMeta = async () => {
      const [cats, tagList] = await Promise.all([
        getAllCategories(),
        getAllTags(),
      ]);
      setCategories(cats);
      setTags(tagList);
    };
    loadMeta();
  }, []);
  const handleDelete = async (tagId: string) => {
    const ok = await confirm({
      title: "Bạn có chắc muốn xoá?",
      description: "Thao tác này không thể hoàn tác.",
      okText: "Xoá",
      cancelText: "Huỷ",
    });
    if (ok) {
      const deleteRes = await handleSubmitWithErrorHandling(
        () => deletePost(tagId),
        (err) => toast.error(err.message),
        setLoading
      );
      if (deleteRes) {
        fetchData();
      }
    }
  };
  const columns = [
    {
      title: "Ảnh",
      dataIndex: "cover_image",
      key: "cover_image",
      render: (url: string) =>
        url ? (
          <img
            src={url}
            alt="cover"
            className="w-14 h-10 object-cover rounded shadow"
          />
        ) : (
          <div className="w-14 h-10 bg-gray-100 text-gray-400 flex items-center justify-center rounded">
            N/A
          </div>
        ),
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
      render: (text: string) => (
        <span
          style={{
            display: "inline-block",
            maxWidth: 200, // set giới hạn rộng tối đa
            whiteSpace: "nowrap", // giữ text 1 dòng
            overflow: "hidden", // ẩn phần thừa
            textOverflow: "ellipsis", // hiện "..."
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Tác giả",
      dataIndex: "profile",
      key: "profile",
      render: (profile: any) => (
        <div className="flex gap-2 flex-col">
          <p>{profile?.display_name}</p>
        </div>
      ),
    },
    {
      title: "Danh mục",
      dataIndex: "categories",
      key: "categories",
      render: (categories: any) => <>{categories?.name || "Không có"}</>,
    },
    {
      title: "Tags",
      dataIndex: "post_tags",
      key: "post_tags",
      render: (post_tags: any[]) =>
        post_tags?.length ? (
          <div className="flex flex-wrap gap-1">
            {post_tags.map((post_tag: any) => (
              <span
                key={post_tag?.tag.id}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded"
              >
                #{post_tag?.tag.name}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-gray-400 text-sm">Không có</span>
        ),
    },
    {
      title: "Trạng thái",
      dataIndex: "is_published",
      key: "is_published",
      render: (published: boolean) => (
        <span
          className={`text-sm font-medium ${
            published ? "text-green-600" : "text-gray-400"
          }`}
        >
          {published ? "Đã xuất bản" : "Bản nháp"}
        </span>
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "created_at",
      key: "created_at",
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_: any, record: any) => (
        <div className="flex gap-2">
          <button
            className="bg-transparent"
            onClick={() => router.push(adminRoutes("post.id", record?.id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-cyan-500"
              style={{ width: "20px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
          </button>
          <button
            className="bg-transparent"
            onClick={() => router.push(adminRoutes("post.edit", record?.id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-cyan-500"
              style={{ width: "20px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
          <button
            className="bg-transparent"
            onClick={() => handleDelete(record.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-cyan-500"
              style={{ width: "20px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  return (
    <PageContent>
      <div className="space-y-6">
        {/* Bộ lọc */}
        <div className="mb-3 flex flex-wrap items-center gap-4 bg-white p-4 rounded-md shadow border">
          <input
            type="text"
            placeholder="Tìm theo tiêu đề..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-64  outline-none"
          />

          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="border px-4 py-2 rounded-md  outline-none"
          >
            <option value="">Tất cả danh mục</option>
            {categories.map((c: any) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            value={tagId}
            onChange={(e) => setTagId(e.target.value)}
            className="border px-4 py-2 rounded-md  outline-none"
          >
            <option value="">Tất cả tags</option>
            {tags.map((t: any) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        {/* Bảng */}
        <div className="bg-white shadow rounded-md overflow-hidden border">
          <CustomTable columns={columns as any} dataSource={posts} />
        </div>

        {/* Phân trang */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-600">
            Tổng cộng: {total} bài viết
          </span>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 text-sm rounded-md border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50"
            >
              Trước
            </button>
            <span className="text-sm text-gray-700 self-center">
              Trang {page} / {totalPages || 1}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
              className="px-4 py-2 text-sm rounded-md border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50"
            >
              Sau
            </button>
          </div>
        </div>
      </div>
    </PageContent>
  );
};

export default PostLists;
