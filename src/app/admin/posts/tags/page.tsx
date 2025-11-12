"use client";

import React, { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import PageContent from "@/components/ui/admin/PageContent";
import { createTag, getAllTags, updateTag, deleteTag } from "@/lib/db/tag";
import { slugify } from "@/lib/utils/slugify";
import { CustomTable } from "@/components/CustomTable";
import { useNotify } from "@/components/ui/NotificationProvider";
import { handleSubmitWithErrorHandling } from "@/utils/asyncHelpers";
import { toast } from "react-toastify";

interface Tag {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

interface TagFormInput {
  name: string;
  slug: string;
}

export default function TagsManager() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingTag, setEditingTag] = useState<Tag | null>(null);
  const { notify, confirm } = useNotify();

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<TagFormInput>();

  const nameValue = useWatch({ control, name: "name" });

  const fetchTags = async () => {
    try {
      const data = await getAllTags();
      setTags(data);
    } catch (err) {
      console.error("Fetch error", err);
    }
  };

  const onSubmit = async (data: TagFormInput) => {
    try {
      setLoading(true);
      if (editingTag) {
        await updateTag(editingTag.id, data.name, data.slug);
      } else {
        await createTag(data.name, data.slug);
      }
      await fetchTags();
      reset();
      setShowForm(false);
      setEditingTag(null);
    } catch (err) {
      alert("Lỗi lưu tag");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (tagId: string) => {
    const ok = await confirm({
      title: "Bạn có chắc muốn xoá?",
      description: "Thao tác này không thể hoàn tác.",
      okText: "Xoá",
      cancelText: "Huỷ",
    });
    if (ok) {
      const deleteRes = await handleSubmitWithErrorHandling(
        () => deleteTag(tagId),
        (err) => toast.error(err.message),
        setLoading
      );
      if (deleteRes) {
        fetchTags();
      }
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  useEffect(() => {
    if (nameValue) {
      const autoSlug = slugify(nameValue);
      setValue("slug", autoSlug);
    }
  }, [nameValue]);

  return (
    <PageContent loading={loading} loadingTip="Loading...">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Quản lý Tags</h1>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingTag(null);
            reset();
          }}
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition-transform"
        >
          {showForm ? "Đóng form" : "Thêm Tag"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white border p-6 rounded-xl shadow-sm mb-6 space-y-5"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            {editingTag ? "Sửa Tag" : "Thêm Tag mới"}
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tên tag
              </label>
              <input
                type="text"
                {...register("name", { required: "Bắt buộc nhập tên" })}
                className="w-full border border-gray-300 p-2 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200 outline-none"
                placeholder="Ví dụ BitCoin"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Slug
              </label>
              <input
                type="text"
                readOnly
                {...register("slug", { required: "Slug là bắt buộc" })}
                className="w-full border border-gray-200 p-2 rounded-lg bg-gray-100 text-gray-700 select-none"
                placeholder="Tự tạo từ tên"
              />
              {errors.slug && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.slug.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 active:scale-95 transition-transform"
          >
            {loading ? "Đang lưu..." : editingTag ? "Cập nhật" : "Lưu"}
          </button>
        </form>
      )}

      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <CustomTable
          columns={[
            { title: "Tên", dataIndex: "name", key: "name" },
            { title: "Slug", dataIndex: "slug", key: "slug" },
            {
              title: "Ngày tạo",
              dataIndex: "created_at",
              key: "created_at",
              render: (val) => new Date(val).toLocaleDateString("vi-VN"),
            },
            {
              title: "Hành động",
              key: "actions",
              dataIndex: "",
              render: (_, record: Tag) => (
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setEditingTag(record);
                      setShowForm(true);
                      setValue("name", record.name);
                      setValue("slug", record.slug);
                    }}
                    className="text-blue-600 hover:text-blue-800 active:scale-95 transition-transform"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleDelete(record.id)}
                    className="text-red-500 hover:text-red-700 active:scale-95 transition-transform"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                      />
                    </svg>
                  </button>
                </div>
              ),
            },
          ]}
          dataSource={tags}
          rowKey="id"
        />
      </div>
    </PageContent>
  );
}
