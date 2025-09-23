import React from "react";
import { FileX } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Icon */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 shadow-sm mb-6">
        <FileX className="w-10 h-10 text-gray-400" />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Không tìm thấy trang
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 max-w-md mb-6">
        Rất tiếc, chúng tôi không tìm thấy thông tin bạn đang tìm kiếm. Vui lòng
        kiểm tra URL hoặc thử lại sau.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="px-5 py-2.5 text-white text-sm font-medium rounded-2xl shadow-md transition-all"
        style={{
          background:
            "linear-gradient(to right, #fe4f70 0%, #ffa387 51%, #fe4f70 100%)",
        }}
      >
        Quay lại
      </Link>
    </div>
  );
};

export default NotFound;
