"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PageContent from "@/components/ui/admin/PageContent";
import EditorJSComponent from "@/components/editor/Editor";
import { getAllTags } from "@/lib/db/tag";
import { getAllCategories } from "@/lib/db/categories";
import TagSelector from "@/components/TagSelector";
import ImageUploader from "@/components/ImageUploader";
import { handleSubmitWithErrorHandling } from "@/utils/asyncHelpers";
import { createPost } from "@/lib/db/post";
import { toast } from "react-toastify";
import { adminRoutes } from "@/routes/admin";
import { useRouter } from "next/navigation";
import { useSession } from "@supabase/auth-helpers-react";

interface Tag {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

interface FormData {
  title: string;
  excerpt?: string;
  content: any;
  coverImage?: string | null;
  isPublished: "draft" | "published";
  categoryId: string;
  tags: string[];
  isFeatured?: boolean;
  isTrending?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  is_featured_hero: "";
}

const NewPost = () => {
  const [tagOptions, setTagOptions] = useState<Tag[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<Category[]>([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const session = useSession();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      excerpt: "",
      content: null,
      isPublished: "draft",
      categoryId: "",
      tags: [],
      isFeatured: false,
      isTrending: false,
      seoTitle: "",
      seoDescription: "",
      is_featured_hero: "",
    },
  });

  useEffect(() => {
    const fetchInitial = async () => {
      const tags = await getAllTags();
      const categories = await getAllCategories();
      setTagOptions(tags);
      setCategoryOptions(categories);
    };
    fetchInitial();
  }, []);

  const onSubmit = async (data: FormData) => {
    if (!session) return;
    const sumbitRes = await handleSubmitWithErrorHandling(
      () => createPost({ ...data, authorId: session.user.id }),
      (err) => toast.error(err.message),
      setLoading
    );
    if (sumbitRes) {
      toast.success("Tạo bài viết thành công!");
      router.push(adminRoutes("posts.all"));
      reset();
    }
  };

  return (
    <PageContent loading={loading} loadingTip="Tạo bài viết...">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#FFFFFF] rounded-lg border border-[#E5E7EB] shadow-sm p-5  mx-auto mt-8 space-y-7"
      >
        {/* Tiêu đề */}
        <div className="mb-3">
          <label className="block text-[14px] font-medium text-[#374151] mb-3">
            Tiêu đề <span className="text-[#EF4444]">*</span>
          </label>
          <input
            type="text"
            {...register("title", { required: "Vui lòng nhập tiêu đề." })}
            className="w-full px-4 py-3 border border-[#D1D5DB] rounded-md text-[16px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition"
            placeholder="Nhập tiêu đề bài viết..."
          />
          {errors?.title && (
            <p className="mt-1 text-[13px] text-[#DC2626]">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Mô tả ngắn */}
        <div className="mb-3">
          <label className="block text-[14px] font-medium text-[#374151] mb-3">
            Mô tả ngắn (excerpt)
          </label>
          <textarea
            {...register("excerpt")}
            rows={3}
            className="w-full px-4 py-3 border border-[#D1D5DB] rounded-md text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition"
            placeholder="Viết mô tả ngắn gọn để thu hút người đọc..."
          />
        </div>

        {/* Ảnh đại diện */}
        <div className="mb-3">
          <label className="block text-[14px] font-medium text-[#374151] mb-3">
            Ảnh đại diện
          </label>
          <div className="border-2 border-dashed border-[#D1D5DB] rounded-md p-6 text-center text-[14px] text-[#6B7280] hover:border-[#2563EB] hover:text-[#2563EB] cursor-pointer transition">
            <ImageUploader onSuccess={(url) => setValue("coverImage", url)} />
          </div>
        </div>

        {/* Nội dung */}
        <div className="mb-3">
          <label className="block text-[14px] font-medium text-[#374151] mb-3">
            Nội dung
          </label>
          <div className="border border-[#D1D5DB] rounded-md min-h-[300px] p-3 focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB]">
            <Controller
              control={control}
              name="content"
              render={({ field }) => (
                <EditorJSComponent onChange={field.onChange} />
              )}
            />
          </div>
        </div>

        {/* Danh mục */}
        <div className="mb-3">
          <label className="block text-[14px] font-medium text-[#374151] mb-3">
            Danh mục <span className="text-[#EF4444]">*</span>
          </label>
          <select
            {...register("categoryId", { required: "Vui lòng chọn danh mục." })}
            className="w-full px-4 py-3 border border-[#D1D5DB] rounded-md text-[15px] text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition"
          >
            <option value="">-- Chọn danh mục --</option>
            {categoryOptions.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <p className="mt-1 text-[13px] text-[#DC2626]">
              {errors.categoryId.message}
            </p>
          )}
        </div>

        {/* Tags */}
        <div className="mb-3">
          <TagSelector
            control={control}
            name="tags"
            tagOptions={tagOptions}
            maxSelectable={5}
          />
        </div>

        {/* Cài đặt hiển thị */}
        <div className="grid grid-cols-2 gap-6 mb-3">
          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-3">
              Tùy chọn hiển thị
            </label>
            <div className="flex flex-col gap-3 text-[14px] text-[#374151]">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("isFeatured")}
                  className="h-4 w-4 rounded border-[#D1D5DB] text-[#2563EB] focus:ring-[#2563EB]"
                />
                <span>Bài viết nổi bật</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("isTrending")}
                  className="h-4 w-4 rounded border-[#D1D5DB] text-[#2563EB] focus:ring-[#2563EB]"
                />
                <span>Bài viết xu hướng</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("is_featured_hero")}
                  className="h-4 w-4 rounded border-[#D1D5DB] text-[#2563EB] focus:ring-[#2563EB]"
                />
                <span>Nổi bật ở trang chủ (Hero)</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-3">
              Trạng thái
            </label>
            <div className="flex flex-col gap-3 text-[14px] text-[#374151]">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="draft"
                  {...register("isPublished")}
                  className="h-4 w-4 border-[#D1D5DB] text-[#2563EB] focus:ring-[#2563EB]"
                />
                <span>Bản nháp</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="published"
                  {...register("isPublished")}
                  className="h-4 w-4 border-[#D1D5DB] text-[#2563EB] focus:ring-[#2563EB]"
                />
                <span>Xuất bản</span>
              </label>
            </div>
          </div>
        </div>

        {/* SEO */}
        <div className="pt-6 border-t border-[#E5E7EB] mb-3">
          <h3 className="text-[15px] font-semibold text-[#111827] mb-4">
            Cấu hình SEO
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-[14px] font-medium text-[#374151] mb-3">
                SEO Title
              </label>
              <input
                type="text"
                {...register("seoTitle")}
                className="w-full px-4 py-3 border border-[#D1D5DB] rounded-md text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition"
                placeholder="Tiêu đề hiển thị trên Google..."
              />
            </div>
            <div>
              <label className="block text-[14px] font-medium text-[#374151] mb-3">
                SEO Description
              </label>
              <textarea
                {...register("seoDescription")}
                rows={2}
                className="w-full px-4 py-3 border border-[#D1D5DB] rounded-md text-[15px] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition"
                placeholder="Mô tả hiển thị trên kết quả tìm kiếm..."
              />
            </div>
          </div>
        </div>

        {/* Nút lưu */}
        <div className="pt-6 text-right">
          <button
            type="submit"
            className="px-6 py-3 bg-[#2563EB] text-[#FFFFFF] rounded-md text-[15px] font-medium hover:bg-[#1E40AF] transition"
          >
            Lưu bài viết
          </button>
        </div>
      </form>
    </PageContent>
  );
};

export default NewPost;
