'use client'

import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import PageContent from '@/components/ui/admin/PageContent'
import EditorJSComponent from '@/components/editor/Editor'
import { getAllTags } from '@/lib/db/tag'
import { getAllCategories } from '@/lib/db/categories'
import TagSelector from '@/components/TagSelector'
import ImageUploader from '@/components/ImageUploader'
import { handleSubmitWithErrorHandling } from '@/utils/asyncHelpers'
import { createPost } from '@/lib/db/post'
import { toast } from 'react-toastify'
import { adminRoutes } from '@/routes/admin'
import { useRouter } from 'next/navigation'
import { useSession } from '@supabase/auth-helpers-react'

interface Tag {
    id: string
    name: string
}

interface Category {
    id: string
    name: string
}

interface FormData {
    title: string
    excerpt?: string
    content: any
    coverImage?: string | null
    isPublished: 'draft' | 'published'
    categoryId: string
    tags: string[]
    isFeatured?: boolean
    isTrending?: boolean
    seoTitle?: string
    seoDescription?: string
}

const NewPost = () => {
    const [tagOptions, setTagOptions] = useState<Tag[]>([])
    const [categoryOptions, setCategoryOptions] = useState<Category[]>([])
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const session = useSession()

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
            title: '',
            excerpt: '',
            content: null,
            isPublished: 'draft',
            categoryId: '',
            tags: [],
            isFeatured: false,
            isTrending: false,
            seoTitle: '',
            seoDescription: '',
        },
    })

    useEffect(() => {
        const fetchInitial = async () => {
            const tags = await getAllTags()
            const categories = await getAllCategories()
            setTagOptions(tags)
            setCategoryOptions(categories)
        }
        fetchInitial()
    }, [])

    const onSubmit = async (data: FormData) => {
        if (!session) return
        const sumbitRes = await handleSubmitWithErrorHandling(
            () => createPost({ ...data, authorId: session.user.id }),
            (err) => toast.error(err.message),
            setLoading
        )
        if (sumbitRes) {
            toast.success('Tạo bài viết thành công!')
            router.push(adminRoutes('posts.all'))
            reset()
        }
    }

    return (
        <PageContent loading={loading} loadingTip='Tạo bài viết...'>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow p-6 max-w-4xl mx-auto mt-10">

                {/* Tiêu đề */}
                <div className="mb-6">
                    <label className="block font-medium text-gray-800 mb-2">Tiêu đề</label>
                    <input
                        type="text"
                        {...register('title', { required: 'Vui lòng nhập tiêu đề.' })}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                        placeholder="Nhập tiêu đề bài viết..."
                    />
                    {errors?.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                </div>

                {/* Mô tả ngắn */}
                <div className="mb-6">
                    <label className="block font-medium text-gray-800 mb-2">Mô tả ngắn (excerpt)</label>
                    <textarea
                        {...register('excerpt')}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                        rows={3}
                        placeholder="Mô tả ngắn gọn về bài viết..."
                    />
                </div>

                {/* Ảnh đại diện */}
                <div className="mb-6">
                    <label className="block font-medium text-gray-800 mb-2">Ảnh đại diện</label>
                    <ImageUploader onSuccess={(url) => setValue('coverImage', url)} />
                </div>

                {/* Nội dung */}
                <div className="mb-6">
                    <label className="block font-medium text-gray-800 mb-2">Nội dung</label>
                    <div className="border rounded-lg overflow-hidden">
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
                <div className="mb-6">
                    <label className="block font-medium text-gray-800 mb-2">Danh mục</label>
                    <select
                        {...register('categoryId', { required: 'Vui lòng chọn danh mục.' })}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                    >
                        <option value="">-- Chọn danh mục --</option>
                        {categoryOptions.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                    {errors.categoryId && <p className="text-red-500 text-sm">{errors.categoryId.message}</p>}
                </div>

                {/* Tags */}
                <div className="mb-6">
                    <TagSelector
                        control={control}
                        name="tags"
                        tagOptions={tagOptions}
                        maxSelectable={5}
                    />
                </div>

                {/* Trạng thái */}
                <div className="mb-6">
                    <label className="block font-medium text-gray-800 mb-2">Trạng thái</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="draft"
                                {...register('isPublished')}
                                className="accent-blue-600"
                            />
                            <span>Bản nháp</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="published"
                                {...register('isPublished')}
                                className="accent-green-600"
                            />
                            <span>Xuất bản</span>
                        </label>
                    </div>
                </div>

                {/* Nổi bật + Xu hướng */}
                <div className="mb-6 flex items-center gap-6">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" {...register('isFeatured')} />
                        <span>Nổi bật</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" {...register('isTrending')} />
                        <span>Đang xu hướng</span>
                    </label>
                </div>

                {/* SEO Title */}
                <div className="mb-6">
                    <label className="block font-medium text-gray-800 mb-2">SEO Title</label>
                    <input
                        type="text"
                        {...register('seoTitle')}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                        placeholder="Tiêu đề cho SEO..."
                    />
                </div>

                {/* SEO Description */}
                <div className="mb-6">
                    <label className="block font-medium text-gray-800 mb-2">SEO Description</label>
                    <textarea
                        {...register('seoDescription')}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                        rows={2}
                        placeholder="Mô tả ngắn cho SEO..."
                    />
                </div>

                {/* Nút lưu */}
                <div className="text-right pt-4">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                        Lưu bài viết
                    </button>
                </div>
            </form>

        </PageContent>
    )
}

export default NewPost
