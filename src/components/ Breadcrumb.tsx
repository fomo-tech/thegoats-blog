import React from 'react';

type BreadcrumbItem = {
    label: string;
    href?: string;
};

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li
                            key={index}
                            className={`breadcrumb-item`}
                            aria-current={isLast ? 'page' : undefined}
                        >
                            {!isLast && item.href ? (
                                <a href={item.href} >
                                    {item.label}
                                </a>
                            ) : (
                                item.label
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
