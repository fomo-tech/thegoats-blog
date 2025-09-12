import Link from "next/link";
import React, { useState } from "react";
import SeachPopup from "../SeachPopup";

const menuItems = [
    {
        label: "Tin tức",
        href: "#",
        submenu: [
            { label: "Tin tổng hợp", href: "/category/tin-tong-hop" },
            { label: "Tin vắn crypto", href: "/category/tin-van" },
            { label: "Tin Altcoin", href: "/category/tin-altcoin" },
            { label: "Pháp lý", href: "/category/phaply" },
            { label: "Defi", href: "/category/defi" },
        ],
    },
    { label: "Sự kiện", href: "/category/su-kien" },
    {
        label: "Kiến thức",
        href: "#",
        submenu: [
            { label: "Phân tích kỹ thuật", href: "/category/phan-tich-ky-thuat" },
            { label: "Phân tích cơ bản", href: "/category/phan-tich-co-ban" },
        ],
    },
    {
        label: "Người mới",
        href: "#",
        submenu: [
            { label: "Hướng dẫn", href: "/category/huong-dan" },
            { label: "Thuật ngữ crypto", href: "/category-thuat-ngu-crypto" },
            { label: "Top sàn giao dịch", href: "/category/top-san-giao-dich" },
        ],
    },
    { label: "Liên hệ", href: "/contact" },
];

const socialIcons = [
    "facebook-f",
    "twitter",
    "instagram",
    "pinterest",
    "medium",
    "youtube",
];

export default function MainHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState({});
    const [searchOpen, setSearchOpen] = useState(false);

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
                    className={`nav-item ${item.submenu ? "dropdown" : ""} ${isMobile && openSubmenus[i] ? "active" : ""
                        }`}
                >
                    <a
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
                    </a>
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
                                        <a
                                            className={isMobile ? "" : "dropdown-item"}
                                            href={sub.href}
                                        >
                                            {sub.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <header className="header-default">
            <SeachPopup isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    {/* Logo */}
                    <Link className="navbar-brand" href="/">
                        logo
                    </Link>

                    <div className="bs-collapse navbar-collapse">{renderMenu(false)}</div>

                    {/* Header right */}
                    <div className="header-right">
                        <ul className="social-icons list-unstyled list-inline mb-0">
                            {socialIcons.map((icon) => (
                                <li className="list-inline-item" key={icon}>
                                    <a href="#">
                                        <i className={`fab fa-${icon}`} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="header-buttons">
                            <button className="search icon-button" onClick={() => setSearchOpen(true)}>
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
                className={`canvas-menu d-flex align-items-end flex-column ${mobileMenuOpen ? "open" : ""
                    }`}
            >
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={toggleMobileMenu}
                />
                <div className="logo">
                    <img src="images/logo.svg" alt="Katen" />
                </div>
                <nav>{renderMenu(true)}</nav>
                <ul className="social-icons list-unstyled list-inline mb-0 mt-auto w-100">
                    {socialIcons.map((icon) => (
                        <li className="list-inline-item" key={icon}>
                            <a href="#">
                                <i className={`fab fa-${icon}`} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
