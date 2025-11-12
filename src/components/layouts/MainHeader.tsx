"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import SeachPopup from "../SeachPopup";
import { usePathname } from "next/navigation";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { useGlobalStore } from "@/store/useGlobalStore";
import { SettingMap } from "@/types/setting";

interface MainHeaderProps {
  settings: SettingMap;
}
const menuItems = [
  {
    label: "Tin tức",
    href: "javascript:void(0)",
    submenu: [
      { label: "Tin tổng hợp", href: "/the-loai/tin-tong-hop" },
      { label: "Tin vắn crypto", href: "/the-loai/tin-van" },
      { label: "Tin Altcoin", href: "/the-loai/tin-altcoin" },
      { label: "Pháp lý", href: "/the-loai/phaply" },
      { label: "Defi", href: "/the-loai/defi" },
    ],
  },
  { label: "Sự kiện", href: "/the-loai/su-kien" },
  {
    label: "Kiến thức",
    href: "javascript:void(0)",
    submenu: [
      { label: "Kiến thức tổng hợp", href: "/the-loai/kien-thuc" },
      { label: "Phân tích kỹ thuật", href: "/the-loai/phan-tich-ky-thuat" },
      { label: "Phân tích cơ bản", href: "/the-loai/phan-tich-co-ban" },
    ],
  },
  {
    label: "Người mới",
    href: "javascript:void(0)",
    submenu: [
      { label: "Hướng dẫn", href: "/the-loai/huong-dan" },
      { label: "Thuật ngữ crypto", href: "/the-loai-thuat-ngu-crypto" },
      { label: "Top sàn giao dịch", href: "/the-loai/top-san-giao-dich" },
    ],
  },
  // { label: "Liên hệ", href: "/contact" },
];

export const socialIcons = {
  FACEBOOK: "facebook-f",
  // "x-twitter",
  TELE: "telegram",
  INSTAGRAM: "instagram",
  TIKTOK: "tiktok",
  YOUTUBE: "youtube",
};

export default function MainHeader({ settings }: MainHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [searchOpen, setSearchOpen] = useState(false);

  const pathname = usePathname();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleSubmenu = (index) =>
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

  const renderMenu = (isMobile = false) => (
    <ul className={isMobile ? "vertical-menu" : "navbar-nav mr-auto"}>
      {menuItems.map((item, i) => (
        <li
          key={item.label}
          className={`nav-item ${item.submenu ? "dropdown" : ""} ${
            isMobile && openSubmenus[i] ? "active" : ""
          }`}
        >
          <Link
            className={item.submenu ? "nav-link dropdown-toggle" : "nav-link"}
            href={item.href}
            onClick={(e) => {
              if (isMobile && item.submenu) {
                e.preventDefault();
                toggleSubmenu(i);
              }
            }}
          >
            {item.label}
          </Link>
          {item.submenu && (
            <>
              <ul
                className={isMobile ? "submenu" : "dropdown-menu"}
                style={
                  isMobile
                    ? { display: openSubmenus[i] ? "block" : "none" }
                    : {}
                }
              >
                {item.submenu.map((sub) => (
                  <li key={sub.label}>
                    <Link
                      className={isMobile ? "" : "dropdown-item"}
                      href={sub.href}
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
  );

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  return (
    <header className="header-default">
      <SeachPopup isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container !max-w-[1280px]">
          {/* Logo */}
          <Link className="navbar-brand" href="/">
            <Image
              width={200}
              height={70}
              alt="Logo crypto fomos"
              src={settings?.LOGO || logo}
            />
          </Link>

          <div className="bs-collapse navbar-collapse">{renderMenu(false)}</div>

          {/* Header right */}
          <div className="header-right">
            <ul className="social-icons list-unstyled list-inline mb-0">
              {Object.keys(socialIcons).map((key, idx) => {
                if (typeof settings[key] !== "undefined")
                  return (
                    <li className="list-inline-item" key={idx}>
                      <a href={settings[key]} target="_blank">
                        <i
                          className={`fab fa-${
                            socialIcons[key as keyof typeof socialIcons]
                          }`}
                        />
                      </a>
                    </li>
                  );
              })}
            </ul>
            <div className="header-buttons">
              <button
                className="search icon-button"
                onClick={() => setSearchOpen(true)}
              >
                <i className="icon-magnifier" />
              </button>
              <button
                className="burger-menu icon-button d-lg-none"
                onClick={toggleMobileMenu}
              >
                <span className="burger-icon" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`canvas-menu d-flex align-items-end flex-column ${
          mobileMenuOpen ? "open" : ""
        }`}
      >
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={toggleMobileMenu}
        />
        <div className="logo my-0">
          <Image
            width={200}
            height={70}
            alt="Logo crypto fomos"
            src={settings?.LOGO || logo}
          />
        </div>
        <nav>{renderMenu(true)}</nav>
        <ul className="social-icons list-unstyled list-inline mb-0 mt-auto w-100">
          {Object.keys(socialIcons).map((key, idx) => {
            if (typeof settings[key] !== "undefined")
              return (
                <li className="list-inline-item" key={idx}>
                  <a href={settings[key]} target="_blank">
                    <i
                      className={`fab fa-${
                        socialIcons[key as keyof typeof socialIcons]
                      }`}
                    />
                  </a>
                </li>
              );
          })}
        </ul>
      </div>
    </header>
  );
}
