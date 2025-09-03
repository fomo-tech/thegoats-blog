'use client'

import React, { useState, useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import PageContent from '@/components/ui/admin/PageContent'
import { createCategory, getAllCategories, updateCategory, deleteCategory } from '@/lib/db/categories'
import { slugify } from '@/lib/utils/slugify'
import { CustomTable } from '@/components/CustomTable'
import { useNotify } from '@/components/ui/NotificationProvider'
import { handleSubmitWithErrorHandling } from '@/utils/asyncHelpers'
import { toast } from 'react-toastify'

interface Category {
    id: string
    name: string
    slug: string
    created_at: string
}

interface CategoryFormInput {
    name: string
    slug: string
}

export default function CategoryManager() {
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [editingCategory, setEditingCategory] = useState<Category | null>(null)
    const { notify, confirm } = useNotify()

    const {
        register,
        handleSubmit,
        reset,
        control,
        setValue,
        formState: { errors },
    } = useForm<CategoryFormInput>()

    const nameValue = useWatch({ control, name: 'name' })

    const fetchCategories = async () => {
        try {
            const data = await getAllCategories()
            setCategories(data)
        } catch (err) {
            console.error('Fetch error', err)
        }
    }

    const onSubmit = async (data: CategoryFormInput) => {
        try {
            setLoading(true)
            if (editingCategory) {
                await updateCategory(editingCategory.id, data.name, data.slug)
            } else {
                await createCategory(data.name, data.slug)
            }
            await fetchCategories()
            reset()
            setShowForm(false)
            setEditingCategory(null)
        } catch (err) {
            alert('Lỗi lưu category')
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (categoryId: string) => {
        const ok = await confirm({
            title: 'Bạn có chắc muốn xoá?',
            description: 'Thao tác này không thể hoàn tác.',
            okText: 'Xoá',
            cancelText: 'Huỷ',
        })
        if (ok) {
            const deleteRes = await handleSubmitWithErrorHandling(
                () => deleteCategory(categoryId),
                (err) => toast.error(err.message),
                setLoading
            );
            if (deleteRes) {
                fetchCategories()
            }
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        if (nameValue) {
            const autoSlug = slugify(nameValue)
            setValue('slug', autoSlug)
        }
    }, [nameValue])

    return (
        <PageContent loading={loading} loadingTip='Loading...'>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Quản lý Categories</h1>
                <button
                    onClick={() => {
                        setShowForm(!showForm)
                        setEditingCategory(null)
                        reset()
                    }}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md transition"
                >
                    {showForm ? 'Đóng form' : 'Thêm Category'}
                </button>
            </div>

            {showForm && (
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white border p-6 rounded-lg shadow-md mb-6 space-y-4"
                >
                    <h2 className="text-lg font-semibold text-gray-700">
                        {editingCategory ? 'Sửa Category' : 'Thêm Category mới'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Tên category</label>
                            <input
                                type="text"
                                {...register('name', { required: 'Bắt buộc nhập tên' })}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
                                placeholder="VD: Công nghệ"
                            />
                            {errors.name && (
                                <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Slug</label>
                            <input
                                type="text"
                                readOnly
                                {...register('slug', { required: 'Slug là bắt buộc' })}
                                className="w-full border border-gray-300 p-2 rounded bg-gray-100 text-gray-700"
                                placeholder="Tự tạo từ tên"
                            />
                            {errors.slug && (
                                <p className="text-sm text-red-500 mt-1">{errors.slug.message}</p>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 bg-green-500 text-white px-4 py-2 rounded transition"
                    >
                        {loading ? '🔄 Đang lưu...' : editingCategory ? 'Cập nhật' : 'Lưu'}
                    </button>
                </form>
            )}

            <div className="overflow-x-auto rounded border bg-white shadow">
                <CustomTable
                    columns={[
                        { title: 'Tên', dataIndex: 'name', key: 'name' },
                        { title: 'Slug', dataIndex: 'slug', key: 'slug' },
                        {
                            title: 'Ngày tạo',
                            dataIndex: 'created_at',
                            key: 'created_at',
                            render: (val) => new Date(val).toLocaleDateString('vi-VN'),
                        },
                        {
                            title: 'Hành động',
                            key: 'actions',
                            dataIndex: '',
                            render: (_, record: Category) => (
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            setEditingCategory(record)
                                            setShowForm(true)
                                            setValue('name', record.name)
                                            setValue('slug', record.slug)
                                        }}
                                        className="bg-transparent"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-cyan-500" style={{
                                            width: "20px"
                                        }}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>

                                    </button>
                                    <button
                                        onClick={() => handleDelete(record.id)}
                                        className="bg-transparent"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-cyan-500" style={{
                                            width: "20px"
                                        }}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>

                                    </button>
                                </div>
                            ),
                        },
                    ]}
                    dataSource={categories}

                />
            </div>
        </PageContent>
    )
}
