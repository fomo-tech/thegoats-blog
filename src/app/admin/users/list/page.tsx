/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

'use client'

import { CustomTable } from '@/components/CustomTable'
import PageContent from '@/components/ui/admin/PageContent'
import PageHeader from '@/components/ui/admin/PageHeader'
import { useNotify } from '@/components/ui/NotificationProvider'
import { deleteUser, getAllUsers, UserCombined, UserWithID } from '@/lib/db/users'
import { handleSubmitWithErrorHandling } from '@/utils/asyncHelpers'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

type User = {
    id: string;
    email: string;
    role: 'admin' | 'writer';
    display_name?: string;
    picture_url?: string;
};

const UserLists = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const { notify, confirm } = useNotify()

    const getUsersData = async () => {
        const res = await handleSubmitWithErrorHandling(
            () => getAllUsers(),
            (err) => console.log(err),
            setLoading
        );
        setUsers(res as User[])

    }

    const handleDeleteUser = async (userId: string) => {
        const ok = await confirm({
            title: 'Bạn có chắc muốn xoá?',
            description: 'Thao tác này không thể hoàn tác.',
            okText: 'Xoá',
            cancelText: 'Huỷ',
        })
        if (ok) {
            const deleteRes = await handleSubmitWithErrorHandling(
                () => deleteUser(userId),
                (err) => toast.error(err.message),
                setLoading
            );
            if (deleteRes) {
                getUsersData()
            }
        }



    }

    useEffect(() => {
        getUsersData()
    }, [])
    const columns: any = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (email: string) => (
                email
            ),
        },
        {
            title: 'Name',
            dataIndex: 'display_name',
            key: 'display_name',
            render: (name: string, record: any) => (
                <>
                    <h6 className="mb-1">{name}</h6>
                    <p className="m-0">{record.message}</p>
                </>
            ),
        },
        {
            title: 'Vai trò',
            dataIndex: 'role',
            key: 'role',
            render: (role: string) => (
                <h6 className="text-muted">

                    {role}
                </h6>
            ),
        },
        {
            title: 'Time',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (created_at: string) => (
                <h6 className="text-muted">

                    {new Date(created_at)?.toLocaleString()}
                </h6>
            ),
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'actions',
            render: (_: unknown, record: UserWithID) => (
                <>
                    <a
                        href="#!"
                        className="badge bg-theme-bg-2 text-white text-[12px] mx-2"
                    >
                        Edit
                    </a>
                    <a
                        href="#!"
                        className="badge bg-theme-bg-1 text-white text-[12px]"
                        onClick={() => handleDeleteUser(record.id)}
                    >
                        Delete
                    </a>
                </>
            ),
        },
    ]

    return (
        <PageContent loading={loading}>
            <PageHeader
                title="Danh sách user"
                breadcrumbs={[
                    { label: 'Dashboard', href: '/admin' },
                    { label: "Danh sách user" },
                ]}
            />
            <div className="card table-card">
                <div className="card-header">
                    <h5>Recent Users</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <CustomTable columns={columns} dataSource={users} />
                    </div>
                </div>
            </div>

        </PageContent>
    )
}

export default UserLists