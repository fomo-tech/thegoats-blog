'use client'

import React from 'react'
import Spin from '../Spin'
import PageHeader from './PageHeader'

interface Breadcrumb {
    label: string
    href?: string
}

interface PageContentProps {
    loading?: boolean
    loadingTip?: string
    title?: string
    breadcrumbs?: Breadcrumb[]
    children?: React.ReactNode
    className?: string
}

const PageContent: React.FC<PageContentProps> = ({
    loading = false,
    loadingTip = '',
    title = '',
    breadcrumbs = [],
    children,
    className = '',
}) => {
    return (
        <div className={`pc-content p-4 ${className}`}>
            {title || breadcrumbs.length > 0 ? (
                <PageHeader
                    title={title}
                    breadcrumbs={breadcrumbs}
                />
            ) : null}

            <Spin spinning={loading} tip={loadingTip}>
                <div className="mt-4">{children}</div>
            </Spin>
        </div>
    )
}

export default PageContent
