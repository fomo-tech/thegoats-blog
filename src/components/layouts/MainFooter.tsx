import React from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { SettingMap } from "@/types/setting";
import { socialIcons } from "./MainHeader";

interface MainFooterProps {
  settings: SettingMap;
}

const Footer = ({ settings }: MainFooterProps) => {
  return (
    <footer className="bg-gray-800 text-gray-400 font-sans py-12 px-4 border-t-4 border-yellow-500">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
        {/* About Section */}
        <div className="max-w-md lg:w-1/4 flex-shrink-0">
          <div className="flex items-center space-x-2 mb-4">
            <Image
              width={200}
              height={70}
              alt="Logo crypto fomos"
              src={settings.LOGO || logo}
            />
          </div>
          <p className="text-sm leading-relaxed">{settings.FOOTER_DES}</p>
        </div>

        {/* Navigation Sections */}
        <div className="flex flex-1 flex-wrap gap-8 md:gap-12 lg:gap-16 justify-between">
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-white mb-2">Sự bí ẩn</h3>
            <a href="#" className="text-[#ffff] transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="text-[#ffff] transition-colors">
              Hướng dẫn biên tập
            </a>
            <a href="#" className="text-[#ffff] transition-colors">
              Về chúng tôi
            </a>
            <a href="#" className="text-[#ffff] transition-colors">
              Miễn trừ trách nhiệm
            </a>
            <a href="#" className="text-[#ffff] transition-colors">
              Đánh Giá Dự Án
            </a>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-lg font-semibold text-white mb-2">Thông tin</h3>
            <a href="#" className="text-[#ffff] transition-colors">
              Thông cáo báo chí
            </a>
            <a href="#" className="text-[#ffff] transition-colors">
              Công nghệ tài chính
            </a>
            <a href="#" className="text-[#ffff] transition-colors">
              Quy định pháp lý
            </a>
            <a href="#" className="text-[#ffff] transition-colors">
              Altcoin
            </a>
            <a href="#" className="text-[#ffff] transition-colors">
              Bitcoin
            </a>
            <a href="#" className="text-[#ffff] transition-colors">
              Blockchain
            </a>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col items-center lg:items-end space-y-4 pt-8 lg:pt-0 border-t border-gray-700 lg:border-t-0 lg:border-l lg:pl-16">
          <div className="flex space-x-6 text-gray-500">
            {Object.keys(socialIcons).map((key, idx) => {
              if (typeof settings[key] !== "undefined")
                return (
                  <li className="list-inline-item" key={idx}>
                    <a
                      href={settings[key]}
                      target="_blank"
                      className="!hover:text-white"
                    >
                      <i
                        className={`fab fa-${
                          socialIcons[key as keyof typeof socialIcons]
                        }`}
                      />
                    </a>
                  </li>
                );
            })}
          </div>
          <p className="text-sm text-[#fff] mt-4">&copy; 2025 Cryptofomo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
