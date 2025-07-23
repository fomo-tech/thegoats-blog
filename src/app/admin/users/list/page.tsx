import PageHeader from '@/components/ui/admin/PageHeader'
import React from 'react'

const UserLists = () => {
    return (
        <div className='pc-content'>
            <PageHeader
                title="Danh sách user"
                breadcrumbs={[
                    { label: 'Dashboard', href: '/admin' },
                    { label: "Danh sách user" },
                ]}
            />
        </div>
    )
}

export default UserLists