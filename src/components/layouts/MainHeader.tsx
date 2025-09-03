import React, { useState } from "react";

const menuItems = [
    {
        label: "Tin tức",
        href: "index.html",
        submenu: [
            { label: "Tin tổng hợp", href: "index.html" },
            { label: "Tin vắn crypto", href: "personal.html" },
            { label: "Tin Altcoin", href: "personal-alt.html" },
            { label: "Pháp lý", href: "minimal.html" },
            { label: "Defi", href: "classic.html" },
        ],
    },
    { label: "Sự kiện", href: "category.html" },
    {
        label: "Kiến thức",
        href: "#",
        submenu: [
            { label: "Phân tích kỹ thuật", href: "category.html" },
            { label: "Phân tích cơ bản", href: "blog-single.html" },
            { label: "Top sàn giao dịch", href: "blog-single-alt.html" },
        ],
    },
    {
        label: "Người mới",
        href: "#",
        submenu: [
            { label: "Hướng dẫn", href: "category.html" },
            { label: "Thuật ngữ crypto", href: "blog-single.html" },
            { label: "Top sàn giao dịch", href: "blog-single-alt.html" },
        ],
    },
    { label: "Liên hệ", href: "contact.html" },
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
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    {/* Logo */}
                    <a className="navbar-brand" href="index.html">
                        logo
                    </a>

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
                            <button className="search icon-button">
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
