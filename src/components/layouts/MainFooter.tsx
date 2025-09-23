import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 font-sans py-12 px-4 border-t-4 border-yellow-500">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
        {/* About Section */}
        <div className="max-w-md lg:w-1/4 flex-shrink-0">
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="/images/cryptodnes-logo.png"
              alt="CryptoDnes Logo"
              className="h-8"
            />
            <h2 className="text-2xl font-bold text-yellow-500">
              Crypto<span className="text-white">Dnes</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            Tin tức và phân tích về tiền điện tử và chuỗi khối - Altcoin,
            Bitcoin, FinTech, quy định, NFT và mọi thứ từ thế giới tiền điện tử.
          </p>
        </div>

        {/* Navigation Sections */}
        <div className="flex flex-1 flex-wrap gap-8 md:gap-12 lg:gap-16 justify-between">
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-white mb-2">Sự bí ẩn</h3>
            <a href="#" className="hover:text-white transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Hướng dẫn biên tập
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Về chúng tôi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Miễn trừ trách nhiệm
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Đánh Giá Dự Án
            </a>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-white mb-2">Thông tin</h3>
            <a href="#" className="hover:text-white transition-colors">
              Thông cáo báo chí
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Công nghệ tài chính
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Quy định pháp lý
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Altcoin
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Bitcoin
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Blockchain
            </a>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col items-center lg:items-end space-y-4 pt-8 lg:pt-0 border-t border-gray-700 lg:border-t-0 lg:border-l lg:pl-16">
          <div className="flex space-x-6 text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">&copy; 2025 CryptoDnes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
