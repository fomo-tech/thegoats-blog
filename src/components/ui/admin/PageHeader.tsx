import Link from 'next/link';
import React from 'react';

export interface BreadcrumbItem {
    label: string;
    href?: string; // Nếu không có href -> là trang hiện tại
}

interface PageHeaderProps {
    title: string;
    breadcrumbs: BreadcrumbItem[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs }) => {
    return (
        <div className="page-header">
            <div className="page-block">
                <div className="page-header-title mb-3">
                    <h5 className="mb-0 font-medium">{title}</h5>
                </div>
                <ul className="breadcrumb">
                    {breadcrumbs.map((item, idx) => (
                        <li
                            key={idx}
                            className="breadcrumb-item"
                            aria-current={idx === breadcrumbs.length - 1 ? 'page' : undefined}
                        >
                            {item.href ? (
                                <Link href={item.href}>{item.label}</Link>
                            ) : (
                                <span>{item.label}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PageHeader;
