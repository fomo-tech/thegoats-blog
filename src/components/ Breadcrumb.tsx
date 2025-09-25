import clsx from "clsx";
import React from "react";

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
              className={clsx(`breadcrumb-item`, {
                "font-[500] text-[#212529]": isLast,
              })}
              aria-current={isLast ? "page" : undefined}
            >
              {!isLast && item.href ? (
                <a href={item.href}>{item.label}</a>
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
