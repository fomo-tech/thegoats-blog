"use client";

import React from "react";

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 text-center">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 shadow-sm mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Không có bài viết nào được tìm thấy
      </h2>
      <p className="text-gray-500 max-w-md">
        Chúng tôi không tìm thấy bài đăng nào. Hãy thử điều chỉnh bộ lọc hoặc
        quay lại sau.
      </p>
    </div>
  );
};

export default Empty;
