'use client'

import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const delta = 2;

        if (currentPage > 1 + delta) {
            pages.push(1);
            if (currentPage > 2 + delta) pages.push("…");
        }

        for (
            let i = Math.max(1, currentPage - delta);
            i <= Math.min(totalPages, currentPage + delta);
            i++
        ) {
            pages.push(i);
        }

        if (currentPage < totalPages - delta) {
            if (currentPage < totalPages - delta - 1) pages.push("…");
            pages.push(totalPages);
        }

        return pages;
    };

    const pages = getPageNumbers();

    return (
        <nav>
            <ul className="pagination justify-content-center flex-wrap">
                {/* Prev */}
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button
                        className="page-link"
                        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                    >
                        &laquo;
                    </button>
                </li>

                {/* Pages (desktop only) */}
                <div className="hidden sm:flex">
                    {pages.map((page, index) =>
                        page === "…" ? (
                            <li key={index} className="page-item disabled">
                                <span className="page-link">…</span>
                            </li>
                        ) : (
                            <li
                                key={index}
                                className={`page-item ${page === currentPage ? "active" : ""}`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => onPageChange(page as number)}
                                >
                                    {page}
                                </button>
                            </li>
                        )
                    )}
                </div>

                {/* Current (mobile only) */}
                <div className="flex sm:hidden items-center">
                    <span className="page-link">
                        {currentPage} / {totalPages}
                    </span>
                </div>

                {/* Next */}
                <li
                    className={`page-item ${currentPage === totalPages ? "disabled" : ""
                        }`}
                >
                    <button
                        className="page-link"
                        onClick={() =>
                            currentPage < totalPages && onPageChange(currentPage + 1)
                        }
                    >
                        &raquo;
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
