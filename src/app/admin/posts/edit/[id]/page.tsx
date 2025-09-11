'use client'

import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useSession, useUser } from '@supabase/auth-helpers-react'
import { toast } from 'react-toastify'

import PageContent from '@/components/ui/admin/PageContent'
import EditorJSComponent from '@/components/editor/Editor'
import ImageUploader from '@/components/ImageUploader'
import TagSelector from '@/components/TagSelector'

import { getAllTags } from '@/lib/db/tag'
import { getAllCategories } from '@/lib/db/categories'
import { getPostById, updatePost } from '@/lib/db/post'

import { handleSubmitWithErrorHandling } from '@/utils/asyncHelpers'
import { adminRoutes } from '@/routes/admin'

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
    excerpt?: string | null
    content: any
    coverImage?: string | null
    categoryId: string
    isPublished: 'draft' | 'published'
    tags: string[]
    is_featured?: boolean
    is_trending?: boolean
    seo_title?: string | null
    seo_description?: string | null
}


const EditPost = () => {
    const [loading, setLoading] = useState(false)
    const [tagOptions, setTagOptions] = useState<Tag[]>([])
    const [categoryOptions, setCategoryOptions] = useState<Category[]>([])
    const router = useRouter()
    const user = useUser()
    const params = useParams()
    const postId = params?.id as string

    const {
        control,
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
        watch,

    } = useForm<FormData>({
        defaultValues: {
            title: '',
            content: null,
            coverImage: '',
            isPublished: 'draft',
            categoryId: '',
            tags: [],
        }
    })


    useEffect(() => {
        const fetchData = async () => {
            if (!postId) {
                toast.error('Không tìm thấy ID bài viết.')
                router.push(adminRoutes('posts.all'))
                return
            }

            setLoading(true)
            try {
                const [tags, categories, post] = await Promise.all([
                    getAllTags(),
                    getAllCategories(),
                    getPostById(postId),
                ])
                setTagOptions(tags)
                setCategoryOptions(categories)

                if (post) {
                    reset({
                        title: post.title,
                        excerpt: post.excerpt || '',
                        content: post.content,
                        isPublished: post.is_published ? 'published' : 'draft',
                        coverImage: post.cover_image,
                        categoryId: post.category_id,
                        tags: post.tags || [],
                        is_featured: post.is_featured || false,
                        is_trending: post.is_trending || false,
                        seo_title: post.seo_title || '',
                        seo_description: post.seo_description || '',
                    })
                }
            } catch (error) {
                console.error(error)
                toast.error('Không thể tải dữ liệu bài viết.')
            }
            setLoading(false)
        }

        fetchData()
    }, [postId, reset, router])

    const onSubmit = async (data: FormData) => {


        if (!user || !postId) return

        const result = await handleSubmitWithErrorHandling(
            () => updatePost(postId, data),
            (err) => toast.error(err.message || 'Cập nhật thất bại.'),
            setLoading
        )

        if (result) {
            toast.success('Cập nhật thành công!')
            router.push(adminRoutes('posts.all'))
        }
    }

    return (
        <PageContent
            loading={loading}
            loadingTip="Đang tải bài viết..."
            title="Cập nhật bài viết"
            breadcrumbs={[
                { label: "Danh sách bài viết", href: adminRoutes('posts.all') },
                { label: "Chỉnh sửa bài viết" },
            ]}
        >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow p-6 space-y-6 max-w-4xl mx-auto mt-10">
                {/* Tiêu đề */}
                <div className='mb-3'>
                    <label className="block text-base font-medium text-gray-800 mb-2">Tiêu đề bài viết</label>
                    <input
                        type="text"
                        placeholder="Nhập tiêu đề..."
                        {...register('title', { required: 'Vui lòng nhập tiêu đề.' })}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                    />
                    {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>}
                </div>

                {/* Ảnh đại diện */}
                <div className='mb-3'>
                    <label className="block text-base font-medium text-gray-800 mb-2">Ảnh đại diện</label>
                    <ImageUploader
                        defaultUrl={watch('coverImage') || ''}
                        onSuccess={(url) => setValue('coverImage', url)}
                    />
                </div>

                {/* Nội dung */}
                <div className='mb-3'>
                    <label className="block text-base font-medium text-gray-800 mb-2">Nội dung bài viết</label>
                    <div className="border rounded-lg overflow-hidden">
                        <Controller
                            control={control}
                            name="content"
                            render={({ field }) => (
                                <EditorJSComponent onChange={field.onChange} data={field.value} />
                            )}
                        />
                    </div>
                </div>

                {/* Danh mục */}
                <div className='mb-3'>
                    <label className="block text-base font-medium text-gray-800 mb-2">Danh mục</label>
                    <select
                        {...register('categoryId', { required: 'Vui lòng chọn danh mục.' })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    >
                        <option value="">-- Chọn danh mục --</option>
                        {categoryOptions.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                    {errors.categoryId && <p className="text-sm text-red-500 mt-1">{errors.categoryId.message}</p>}
                </div>

                {/* Tags */}
                <div className='mb-3'>
                    <TagSelector
                        control={control}
                        name="tags"
                        tagOptions={tagOptions}
                        maxSelectable={5}
                    />
                </div>
                {/* Nổi bật / Trending */}
                <div className="flex items-center gap-3 mb-3">
                    <label className="flex items-center gap-2 text-md">
                        <input type="checkbox" {...register('is_featured')} className="accent-blue-600" />
                        <span>Nổi bật</span>
                    </label>
                    <label className="flex items-center gap-2 text-md">
                        <input type="checkbox" {...register('is_trending')} className="accent-red-600" />
                        <span>Trending</span>
                    </label>
                </div>

                {/* Tóm tắt */}
                <div className='mb-3'>
                    <label className="block text-base font-medium text-gray-800 mb-2">Tóm tắt</label>
                    <textarea
                        rows={3}
                        placeholder="Tóm tắt ngắn gọn nội dung bài viết"
                        {...register('excerpt')}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                    />
                </div>

                {/* SEO title */}
                <div className='mb-3'>
                    <label className="block text-base font-medium text-gray-800 mb-2">Tiêu đề SEO</label>
                    <input
                        type="text"
                        placeholder="Nhập tiêu đề SEO..."
                        {...register('seo_title')}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                    />
                </div>

                {/* SEO description */}
                <div className='mb-3'>
                    <label className="block text-base font-medium text-gray-800 mb-2">Mô tả SEO</label>
                    <textarea
                        rows={2}
                        placeholder="Nhập mô tả SEO..."
                        {...register('seo_description')}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg"
                    />
                </div>


                {/* Trạng thái */}
                <div>
                    <label className="block text-md font-medium text-gray-800 mb-2">Trạng thái</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 text-md">
                            <input
                                type="radio"
                                value="draft"
                                {...register('isPublished', { required: true })}
                                className="accent-blue-600"
                            />
                            <span>Bản nháp</span>
                        </label>
                        <label className="flex items-center gap-2 text-md">
                            <input
                                type="radio"
                                value="published"
                                {...register('isPublished', { required: true })}
                                className="accent-green-600"
                            />
                            <span>Xuất bản</span>
                        </label>
                    </div>
                </div>
                {/* Nút lưu */}
                <div className="text-right pt-4">
                    <button
                        type='submit'
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
                    >
                        Cập nhật bài viết
                    </button>
                </div>
            </form>
        </PageContent>
    )
}

export default EditPost
