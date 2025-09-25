import Link from "next/link";
import React from "react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs }) => {
  return (
    <section className="page-header">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center">
          <h1 className="mt-0 mb-2">{title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li
                    key={index}
                    className={`breadcrumb-item${isLast ? " active" : ""}`}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {crumb.href && !isLast ? (
                      <Link href={crumb.href}>{crumb.label}</Link>
                    ) : (
                      crumb.label
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
