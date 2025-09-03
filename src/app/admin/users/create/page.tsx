'use client'

import PageHeader from '@/components/ui/admin/PageHeader'
import ImageUploader from '@/components/ImageUploader'
import { createUser, UserCombined } from '@/lib/db/users'
import { adminRoutes } from '@/routes/admin'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { handleSubmitWithErrorHandling } from '@/utils/asyncHelpers'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import PageContent from '@/components/ui/admin/PageContent'

const CreateUser = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<UserCombined>({
        defaultValues: {
            email: '',
            password: '',
            email_confirm: true,
            role: 'writer',
            display_name: '',
            picture_url: 'https://cafla.ca/wp-content/uploads/2023/07/Utilisateur.jpeg',
        },
    })

    const onSubmit = async (data: UserCombined) => {
        const sumbitRes = await handleSubmitWithErrorHandling(
            () => createUser({ ...data }),
            (err) => toast.error(err.message),
            setLoading
        );
        if (sumbitRes) {
            router.push(adminRoutes('users.list'))
            reset()
        }
    }


    return (
        <PageContent loading={loading} loadingTip='Đang tạo user...'>
            <PageHeader
                title="Danh sách user"
                breadcrumbs={[
                    { label: 'Danh sách user', href: adminRoutes('users.list') },
                    { label: 'Thêm User' },
                ]}
            />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-2xl mx-auto bg-white p-6 space-y-5 rounded shadow"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Tạo người dùng</h2>

                {/* Email */}
                <div className='mb-3'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        {...register('email', { required: 'Email là bắt buộc' })}
                        className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>

                {/* Mật khẩu */}
                <div className='mb-3'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
                    <input
                        type="password"
                        {...register('password', { required: 'Mật khẩu là bắt buộc' })}
                        className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                </div>

                {/* Tên hiển thị */}
                <div className='mb-3'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tên hiển thị</label>
                    <input
                        type="text"
                        {...register('display_name', {
                            required: 'Tên hiển thị là bắt buộc'
                        })}
                        className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.display_name && <p className="text-sm text-red-500">{errors.display_name.message}</p>}
                </div>

                {/* Ảnh đại diện */}
                <div className='mb-3'>
                    <ImageUploader
                        label="Ảnh đại diện"
                        onSuccess={(url) => setValue('picture_url', url)}
                    />
                </div>

                {/* Vai trò */}
                <div className='mb-3'>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Vai trò</label>
                    <select
                        {...register('role')}
                        className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="admin">Admin</option>
                        <option value="writer">Writer</option>
                    </select>
                </div>

                {/* Checkbox xác nhận */}
                <div className="flex items-center gap-2 my-3">
                    <input
                        type="checkbox"
                        {...register('email_confirm')}
                        className="accent-blue-600"
                    />
                    <label className="text-sm text-gray-700">Email đã xác thực</label>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2 bg-blue-500 text-white rounded  transition disabled:opacity-50"
                >
                    {isSubmitting ? 'Đang tạo...' : 'Tạo người dùng'}
                </button>
            </form>
        </PageContent>
    )
}

export default CreateUser
