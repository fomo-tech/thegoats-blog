import React from 'react'

const PageAdmin = () => {
    return (
        <>
            <nav className="pc-sidebar pc-trigger">
                <div className="navbar-wrapper" style={{ display: "block" }}>
                    <div className="m-header flex items-center py-4 px-6 h-header-height">
                        <a
                            href="../dashboard/index.html"
                            className="b-brand flex items-center gap-3"
                        >
                            {/* ========   Change your logo from here   ============ */}
                            <img
                                src="../assets/images/logo-white.svg"
                                className="img-fluid logo logo-lg"
                                alt="logo"
                            />
                            <img
                                src="../assets/images/favicon.svg"
                                className="img-fluid logo logo-sm"
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div
                        className="navbar-content h-[calc(100vh_-_74px)] py-2.5 pc-trigger active"
                        data-simplebar="init"
                    >
                        <div className="simplebar-wrapper" style={{ margin: "-10.625px 0px" }}>
                            <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer" />
                            </div>
                            <div className="simplebar-mask">
                                <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                                    <div
                                        className="simplebar-content-wrapper"
                                        tabIndex={0}
                                        role="region"
                                        aria-label="scrollable content"
                                        style={{ height: "100%", overflow: "hidden" }}
                                    >
                                        <div
                                            className="simplebar-content"
                                            style={{ padding: "10.625px 0px" }}
                                        >
                                            <ul className="pc-navbar" style={{ display: "block" }}>
                                                <li className="pc-item pc-caption">
                                                    <label>Navigation</label>
                                                </li>
                                                <li className="pc-item"></li>
                                                <li className="pc-item active">
                                                    <a href="../dashboard/index.html" className="pc-link">
                                                        <span className="pc-micon">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-home"
                                                            >
                                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                                <polyline points="9 22 9 12 15 12 15 22" />
                                                            </svg>
                                                        </span>
                                                        <span className="pc-mtext">Dashboard</span>
                                                    </a>
                                                </li>
                                                <li className="pc-item pc-caption">
                                                    <label>UI Components</label>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-feather"
                                                    >
                                                        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                                                        <line x1={16} y1={8} x2={2} y2={22} />
                                                        <line x1="17.5" y1={15} x2={9} y2={15} />
                                                    </svg>
                                                </li>
                                                <li className="pc-item pc-hasmenu">
                                                    <a href="../elements/bc_color.html" className="pc-link">
                                                        <span className="pc-micon">
                                                            {" "}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-edit"
                                                            >
                                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                            </svg>
                                                        </span>
                                                        <span className="pc-mtext">Color</span>
                                                    </a>
                                                </li>
                                                <li className="pc-item pc-hasmenu">
                                                    <a
                                                        href="../elements/bc_typography.html"
                                                        className="pc-link"
                                                    >
                                                        <span className="pc-micon">
                                                            {" "}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-type"
                                                            >
                                                                <polyline points="4 7 4 4 20 4 20 7" />
                                                                <line x1={9} y1={20} x2={15} y2={20} />
                                                                <line x1={12} y1={4} x2={12} y2={20} />
                                                            </svg>
                                                        </span>
                                                        <span className="pc-mtext">Typography</span>
                                                    </a>
                                                </li>
                                                <li className="pc-item pc-hasmenu">
                                                    <a href="../elements/icon-feather.html" className="pc-link">
                                                        <span className="pc-micon">
                                                            {" "}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-feather"
                                                            >
                                                                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                                                                <line x1={16} y1={8} x2={2} y2={22} />
                                                                <line x1="17.5" y1={15} x2={9} y2={15} />
                                                            </svg>
                                                        </span>
                                                        <span className="pc-mtext">Icons</span>
                                                    </a>
                                                </li>
                                                <li className="pc-item pc-caption">
                                                    <label>Pages</label>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-monitor"
                                                    >
                                                        <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
                                                        <line x1={8} y1={21} x2={16} y2={21} />
                                                        <line x1={12} y1={17} x2={12} y2={21} />
                                                    </svg>
                                                </li>
                                                <li className="pc-item pc-hasmenu">
                                                    <a
                                                        href="../pages/login-v1.html"
                                                        className="pc-link"
                                                        target="_blank"
                                                    >
                                                        <span className="pc-micon">
                                                            {" "}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-lock"
                                                            >
                                                                <rect
                                                                    x={3}
                                                                    y={11}
                                                                    width={18}
                                                                    height={11}
                                                                    rx={2}
                                                                    ry={2}
                                                                />
                                                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                                            </svg>
                                                        </span>
                                                        <span className="pc-mtext">Login</span>
                                                    </a>
                                                </li>
                                                <li className="pc-item pc-hasmenu">
                                                    <a
                                                        href="../pages/register-v1.html"
                                                        className="pc-link"
                                                        target="_blank"
                                                    >
                                                        <span className="pc-micon">
                                                            {" "}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-user-plus"
                                                            >
                                                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                                                <circle cx="8.5" cy={7} r={4} />
                                                                <line x1={20} y1={8} x2={20} y2={14} />
                                                                <line x1={23} y1={11} x2={17} y2={11} />
                                                            </svg>
                                                        </span>
                                                        <span className="pc-mtext">Register</span>
                                                    </a>
                                                </li>
                                                <li className="pc-item pc-caption">
                                                    <label>Other</label>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-sidebar"
                                                    >
                                                        <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                                                        <line x1={9} y1={3} x2={9} y2={21} />
                                                    </svg>
                                                </li>
                                                <li className="pc-item pc-hasmenu">
                                                    <a href="#!" className="pc-link">
                                                        <span className="pc-micon">
                                                            {" "}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-align-right"
                                                            >
                                                                <line x1={21} y1={10} x2={7} y2={10} />
                                                                <line x1={21} y1={6} x2={3} y2={6} />
                                                                <line x1={21} y1={14} x2={3} y2={14} />
                                                                <line x1={21} y1={18} x2={7} y2={18} />
                                                            </svg>{" "}
                                                        </span>
                                                        <span className="pc-mtext">Menu levels</span>
                                                        <span className="pc-arrow">
                                                            <i className="ti ti-chevron-right" />
                                                        </span>
                                                    </a>
                                                    <ul className="pc-submenu" style={{ display: "none" }}>
                                                        <li className="pc-item">
                                                            <a className="pc-link" href="#!">
                                                                Level 2.1
                                                            </a>
                                                        </li>
                                                        <li className="pc-item pc-hasmenu">
                                                            <a href="#!" className="pc-link">
                                                                Level 2.2
                                                                <span className="pc-arrow">
                                                                    <i className="ti ti-chevron-right" />
                                                                </span>
                                                            </a>
                                                            <ul className="pc-submenu" style={{ display: "none" }}>
                                                                <li className="pc-item">
                                                                    <a className="pc-link" href="#!">
                                                                        Level 3.1
                                                                    </a>
                                                                </li>
                                                                <li className="pc-item">
                                                                    <a className="pc-link" href="#!">
                                                                        Level 3.2
                                                                    </a>
                                                                </li>
                                                                <li className="pc-item pc-hasmenu">
                                                                    <a href="#!" className="pc-link">
                                                                        Level 3.3
                                                                        <span className="pc-arrow">
                                                                            <i className="ti ti-chevron-right" />
                                                                        </span>
                                                                    </a>
                                                                    <ul
                                                                        className="pc-submenu"
                                                                        style={{ display: "none" }}
                                                                    >
                                                                        <li className="pc-item">
                                                                            <a className="pc-link" href="#!">
                                                                                Level 4.1
                                                                            </a>
                                                                        </li>
                                                                        <li className="pc-item">
                                                                            <a className="pc-link" href="#!">
                                                                                Level 4.2
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="pc-item pc-hasmenu">
                                                            <a href="#!" className="pc-link">
                                                                Level 2.3
                                                                <span className="pc-arrow">
                                                                    <i className="ti ti-chevron-right" />
                                                                </span>
                                                            </a>
                                                            <ul className="pc-submenu" style={{ display: "none" }}>
                                                                <li className="pc-item">
                                                                    <a className="pc-link" href="#!">
                                                                        Level 3.1
                                                                    </a>
                                                                </li>
                                                                <li className="pc-item">
                                                                    <a className="pc-link" href="#!">
                                                                        Level 3.2
                                                                    </a>
                                                                </li>
                                                                <li className="pc-item pc-hasmenu">
                                                                    <a href="#!" className="pc-link">
                                                                        Level 3.3
                                                                        <span className="pc-arrow">
                                                                            <i className="ti ti-chevron-right" />
                                                                        </span>
                                                                    </a>
                                                                    <ul
                                                                        className="pc-submenu"
                                                                        style={{ display: "none" }}
                                                                    >
                                                                        <li className="pc-item">
                                                                            <a className="pc-link" href="#!">
                                                                                Level 4.1
                                                                            </a>
                                                                        </li>
                                                                        <li className="pc-item">
                                                                            <a className="pc-link" href="#!">
                                                                                Level 4.2
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="pc-item">
                                                    <a href="../other/sample-page.html" className="pc-link">
                                                        <span className="pc-micon">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-sidebar"
                                                            >
                                                                <rect
                                                                    x={3}
                                                                    y={3}
                                                                    width={18}
                                                                    height={18}
                                                                    rx={2}
                                                                    ry={2}
                                                                />
                                                                <line x1={9} y1={3} x2={9} y2={21} />
                                                            </svg>
                                                        </span>
                                                        <span className="pc-mtext">Sample page</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="simplebar-placeholder"
                                style={{ width: 264, height: 585 }}
                            />
                        </div>
                        <div
                            className="simplebar-track simplebar-horizontal"
                            style={{ visibility: "hidden" }}
                        >
                            <div
                                className="simplebar-scrollbar"
                                style={{ width: 0, display: "none" }}
                            />
                        </div>
                        <div
                            className="simplebar-track simplebar-vertical"
                            style={{ visibility: "hidden" }}
                        >
                            <div
                                className="simplebar-scrollbar"
                                style={{ height: 0, display: "none" }}
                            />
                        </div>
                    </div>
                </div>
            </nav>

            <header className="pc-header">
                <div className="header-wrapper flex max-sm:px-[15px] px-[25px] grow">
                    {/* [Mobile Media Block] start */}
                    <div className="me-auto pc-mob-drp">
                        <ul className="inline-flex *:min-h-header-height *:inline-flex *:items-center">
                            {/* ======= Menu collapse Icon ===== */}
                            <li className="pc-h-item pc-sidebar-collapse max-lg:hidden lg:inline-flex">
                                <a
                                    href="#"
                                    className="pc-head-link ltr:!ml-0 rtl:!mr-0"
                                    id="sidebar-hide"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-menu"
                                    >
                                        <line x1={3} y1={12} x2={21} y2={12} />
                                        <line x1={3} y1={6} x2={21} y2={6} />
                                        <line x1={3} y1={18} x2={21} y2={18} />
                                    </svg>
                                </a>
                            </li>
                            <li className="pc-h-item pc-sidebar-popup lg:hidden">
                                <a
                                    href="#"
                                    className="pc-head-link ltr:!ml-0 rtl:!mr-0"
                                    id="mobile-collapse"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-menu"
                                    >
                                        <line x1={3} y1={12} x2={21} y2={12} />
                                        <line x1={3} y1={6} x2={21} y2={6} />
                                        <line x1={3} y1={18} x2={21} y2={18} />
                                    </svg>
                                </a>
                            </li>
                            <li className="dropdown pc-h-item">
                                <a
                                    className="pc-head-link dropdown-toggle me-0"
                                    data-pc-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="false"
                                    aria-expanded="false"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-search"
                                    >
                                        <circle cx={11} cy={11} r={8} />
                                        <line x1={21} y1={21} x2="16.65" y2="16.65" />
                                    </svg>
                                </a>
                                <div className="dropdown-menu pc-h-dropdown drp-search">
                                    <form className="px-2 py-1">
                                        <input
                                            type="search"
                                            className="form-control !border-0 !shadow-none"
                                            placeholder="Search here. . ."
                                        />
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* [Mobile Media Block end] */}
                    <div className="ms-auto">
                        <ul className="inline-flex *:min-h-header-height *:inline-flex *:items-center">
                            <li className="dropdown pc-h-item">
                                <a
                                    className="pc-head-link dropdown-toggle me-0"
                                    data-pc-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="false"
                                    aria-expanded="false"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-sun"
                                    >
                                        <circle cx={12} cy={12} r={5} />
                                        <line x1={12} y1={1} x2={12} y2={3} />
                                        <line x1={12} y1={21} x2={12} y2={23} />
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                        <line x1={1} y1={12} x2={3} y2={12} />
                                        <line x1={21} y1={12} x2={23} y2={12} />
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                    </svg>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
                                    <a
                                        href="#!"
                                        className="dropdown-item"

                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-moon"
                                        >
                                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                        </svg>
                                        <span>Dark</span>
                                    </a>
                                    <a
                                        href="#!"
                                        className="dropdown-item"

                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-sun"
                                        >
                                            <circle cx={12} cy={12} r={5} />
                                            <line x1={12} y1={1} x2={12} y2={3} />
                                            <line x1={12} y1={21} x2={12} y2={23} />
                                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                            <line x1={1} y1={12} x2={3} y2={12} />
                                            <line x1={21} y1={12} x2={23} y2={12} />
                                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                        </svg>
                                        <span>Light</span>
                                    </a>
                                    <a
                                        href="#!"
                                        className="dropdown-item"

                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-settings"
                                        >
                                            <circle cx={12} cy={12} r={3} />
                                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                        </svg>
                                        <span>Default</span>
                                    </a>
                                </div>
                            </li>
                            <li className="dropdown pc-h-item">
                                <a
                                    className="pc-head-link dropdown-toggle me-0"
                                    data-pc-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="false"
                                    aria-expanded="false"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-settings"
                                    >
                                        <circle cx={12} cy={12} r={3} />
                                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                    </svg>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
                                    <a href="#!" className="dropdown-item">
                                        <i className="ti ti-user" />
                                        <span>My Account</span>
                                    </a>
                                    <a href="#!" className="dropdown-item">
                                        <i className="ti ti-settings" />
                                        <span>Settings</span>
                                    </a>
                                    <a href="#!" className="dropdown-item">
                                        <i className="ti ti-headset" />
                                        <span>Support</span>
                                    </a>
                                    <a href="#!" className="dropdown-item">
                                        <i className="ti ti-lock" />
                                        <span>Lock Screen</span>
                                    </a>
                                    <a href="#!" className="dropdown-item">
                                        <i className="ti ti-power" />
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </li>
                            <li className="dropdown pc-h-item">
                                <a
                                    className="pc-head-link dropdown-toggle me-0"
                                    data-pc-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="false"
                                    aria-expanded="false"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-bell"
                                    >
                                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                    </svg>
                                    <span className="badge bg-success-500 text-white rounded-full z-10 absolute right-0 top-0">
                                        3
                                    </span>
                                </a>
                                <div className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown p-2">
                                    <div className="dropdown-header flex items-center justify-between py-4 px-5">
                                        <h5 className="m-0">Notifications</h5>
                                        <a href="#!" className="btn btn-link btn-sm">
                                            Mark all read
                                        </a>
                                    </div>
                                    <div
                                        className="dropdown-body header-notification-scroll relative py-4 px-5 simplebar-scrollable-y"
                                        style={{ maxHeight: "calc(100vh - 215px)" }}
                                        data-simplebar="init"
                                    >
                                        <div
                                            className="simplebar-wrapper"
                                            style={{ margin: "-17px -21.25px" }}
                                        >
                                            <div className="simplebar-height-auto-observer-wrapper">
                                                <div className="simplebar-height-auto-observer" />
                                            </div>
                                            <div className="simplebar-mask">
                                                <div
                                                    className="simplebar-offset"
                                                    style={{ right: 0, bottom: 0 }}
                                                >
                                                    <div
                                                        className="simplebar-content-wrapper"
                                                        tabIndex={0}
                                                        role="region"
                                                        aria-label="scrollable content"
                                                        style={{ height: "auto", overflow: "hidden scroll" }}
                                                    >
                                                        <div
                                                            className="simplebar-content"
                                                            style={{ padding: "17px 21.25px" }}
                                                        >
                                                            <p className="text-span mb-3">Today</p>
                                                            <div className="card mb-2">
                                                                <div className="card-body">
                                                                    <div className="flex gap-4">
                                                                        <div className="shrink-0">
                                                                            <img
                                                                                className="img-radius w-12 h-12 rounded-0"
                                                                                src="../assets/images/user/avatar-1.jpg"
                                                                                alt="Generic placeholder image"
                                                                            />
                                                                        </div>
                                                                        <div className="grow">
                                                                            <span className="float-end text-sm text-muted">
                                                                                2 min ago
                                                                            </span>
                                                                            <h5 className="text-body mb-2">UI/UX Design</h5>
                                                                            <p className="mb-0">
                                                                                Lorem Ipsum has been the industry's standard
                                                                                dummy text ever since the 1500s, when an
                                                                                unknown printer took a galley of type and
                                                                                scrambled it to make a type
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card mb-2">
                                                                <div className="card-body">
                                                                    <div className="flex gap-4">
                                                                        <div className="shrink-0">
                                                                            <img
                                                                                className="img-radius w-12 h-12 rounded-0"
                                                                                src="../assets/images/user/avatar-2.jpg"
                                                                                alt="Generic placeholder image"
                                                                            />
                                                                        </div>
                                                                        <div className="grow">
                                                                            <span className="float-end text-sm text-muted">
                                                                                1 hour ago
                                                                            </span>
                                                                            <h5 className="text-body mb-2">Message</h5>
                                                                            <p className="mb-0">
                                                                                Lorem Ipsum has been the industry's standard
                                                                                dummy text ever since the 1500.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="text-span mb-3 mt-4">Yesterday</p>
                                                            <div className="card mb-2">
                                                                <div className="card-body">
                                                                    <div className="flex gap-4">
                                                                        <div className="shrink-0">
                                                                            <img
                                                                                className="img-radius w-12 h-12 rounded-0"
                                                                                src="../assets/images/user/avatar-3.jpg"
                                                                                alt="Generic placeholder image"
                                                                            />
                                                                        </div>
                                                                        <div className="grow ms-3">
                                                                            <span className="float-end text-sm text-muted">
                                                                                2 hour ago
                                                                            </span>
                                                                            <h5 className="text-body mb-2">Forms</h5>
                                                                            <p className="mb-0">
                                                                                Lorem Ipsum has been the industry's standard
                                                                                dummy text ever since the 1500s, when an
                                                                                unknown printer took a galley of type and
                                                                                scrambled it to make a type
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card mb-2">
                                                                <div className="card-body">
                                                                    <div className="flex gap-4">
                                                                        <div className="shrink-0">
                                                                            <img
                                                                                className="img-radius w-12 h-12 rounded-0"
                                                                                src="../assets/images/user/avatar-4.jpg"
                                                                                alt="Generic placeholder image"
                                                                            />
                                                                        </div>
                                                                        <div className="grow ms-3">
                                                                            <span className="float-end text-sm text-muted">
                                                                                12 hour ago
                                                                            </span>
                                                                            <h5 className="text-body mb-2">
                                                                                Challenge invitation
                                                                            </h5>
                                                                            <p className="mb-2">
                                                                                <strong>Jonny aber</strong>
                                                                                invites to join the challenge
                                                                            </p>
                                                                            <button className="btn btn-sm btn-outline-secondary me-2">
                                                                                Decline
                                                                            </button>
                                                                            <button className="btn btn-sm btn-primary">
                                                                                Accept
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card mb-2">
                                                                <div className="card-body">
                                                                    <div className="flex gap-4">
                                                                        <div className="shrink-0">
                                                                            <img
                                                                                className="img-radius w-12 h-12 rounded-0"
                                                                                src="../assets/images/user/avatar-5.jpg"
                                                                                alt="Generic placeholder image"
                                                                            />
                                                                        </div>
                                                                        <div className="grow ms-3">
                                                                            <span className="float-end text-sm text-muted">
                                                                                5 hour ago
                                                                            </span>
                                                                            <h5 className="text-body mb-2">Security</h5>
                                                                            <p className="mb-0">
                                                                                Lorem Ipsum has been the industry's standard
                                                                                dummy text ever since the 1500s, when an
                                                                                unknown printer took a galley of type and
                                                                                scrambled it to make a type
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="simplebar-placeholder"
                                                style={{ width: 433, height: 1043 }}
                                            />
                                        </div>
                                        <div
                                            className="simplebar-track simplebar-horizontal"
                                            style={{ visibility: "hidden" }}
                                        >
                                            <div
                                                className="simplebar-scrollbar"
                                                style={{ width: 0, display: "none" }}
                                            />
                                        </div>
                                        <div
                                            className="simplebar-track simplebar-vertical"
                                            style={{ visibility: "visible" }}
                                        >
                                            <div
                                                className="simplebar-scrollbar"
                                                style={{
                                                    height: 529,
                                                    transform: "translate3d(0px, 0px, 0px)",
                                                    display: "block"
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center py-2">
                                        <a
                                            href="#!"
                                            className="text-danger-500 hover:text-danger-600 focus:text-danger-600 active:text-danger-600"
                                        >
                                            Clear all Notifications
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown pc-h-item header-user-profile">
                                <a
                                    className="pc-head-link dropdown-toggle arrow-none me-0"
                                    data-pc-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="false"
                                    data-pc-auto-close="outside"
                                    aria-expanded="false"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-user"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                </a>
                                <div className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown p-2 overflow-hidden">
                                    <div className="dropdown-header flex items-center justify-between py-4 px-5 bg-primary-500">
                                        <div className="flex mb-1 items-center">
                                            <div className="shrink-0">
                                                <img
                                                    src="../assets/images/user/avatar-2.jpg"
                                                    alt="user-image"
                                                    className="w-10 rounded-full"
                                                />
                                            </div>
                                            <div className="grow ms-3">
                                                <h6 className="mb-1 text-white">Carson Darrin 🖖</h6>
                                                <span className="text-white">carson.darrin@company.io</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-body py-4 px-5">
                                        <div
                                            className="profile-notification-scroll position-relative"
                                            style={{ maxHeight: "calc(100vh - 225px)" }}
                                            data-simplebar="init"
                                        >
                                            <div className="simplebar-wrapper" style={{ margin: 0 }}>
                                                <div className="simplebar-height-auto-observer-wrapper">
                                                    <div className="simplebar-height-auto-observer" />
                                                </div>
                                                <div className="simplebar-mask">
                                                    <div
                                                        className="simplebar-offset"
                                                        style={{ right: 0, bottom: 0 }}
                                                    >
                                                        <div
                                                            className="simplebar-content-wrapper"
                                                            tabIndex={0}
                                                            role="region"
                                                            aria-label="scrollable content"
                                                            style={{ height: "auto", overflow: "hidden" }}
                                                        >
                                                            <div
                                                                className="simplebar-content"
                                                                style={{ padding: 0 }}
                                                            >
                                                                <a href="#" className="dropdown-item">
                                                                    <span>
                                                                        <svg className="pc-icon text-muted me-2 inline-block">
                                                                            <use xlinkHref="#custom-setting-outline" />
                                                                        </svg>
                                                                        <span>Settings</span>
                                                                    </span>
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    <span>
                                                                        <svg className="pc-icon text-muted me-2 inline-block">
                                                                            <use xlinkHref="#custom-share-bold" />
                                                                        </svg>
                                                                        <span>Share</span>
                                                                    </span>
                                                                </a>
                                                                <a href="#" className="dropdown-item">
                                                                    <span>
                                                                        <svg className="pc-icon text-muted me-2 inline-block">
                                                                            <use xlinkHref="#custom-lock-outline" />
                                                                        </svg>
                                                                        <span>Change Password</span>
                                                                    </span>
                                                                </a>
                                                                <div className="grid my-3">
                                                                    <button className="btn btn-primary flex items-center justify-center">
                                                                        <svg className="pc-icon me-2 w-[22px] h-[22px]">
                                                                            <use xlinkHref="#custom-logout-1-outline" />
                                                                        </svg>
                                                                        Logout
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="simplebar-placeholder"
                                                    style={{ width: 248, height: 198 }}
                                                />
                                            </div>
                                            <div
                                                className="simplebar-track simplebar-horizontal"
                                                style={{ visibility: "hidden" }}
                                            >
                                                <div
                                                    className="simplebar-scrollbar"
                                                    style={{ width: 0, display: "none" }}
                                                />
                                            </div>
                                            <div
                                                className="simplebar-track simplebar-vertical"
                                                style={{ visibility: "hidden" }}
                                            >
                                                <div
                                                    className="simplebar-scrollbar"
                                                    style={{ height: 0, display: "none" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <div className="pc-container">
                <div className="pc-content">
                    {/* [ breadcrumb ] start */}
                    <div className="page-header">
                        <div className="page-block">
                            <div className="page-header-title">
                                <h5 className="mb-0 font-medium">Default</h5>
                            </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="../dashboard/index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="javascript: void(0)">Dashboard</a>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    Default
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* [ breadcrumb ] end */}
                    {/* [ Main Content ] start */}
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="col-span-12 xl:col-span-4 md:col-span-6">
                            <div className="card">
                                <div className="card-header !pb-0 !border-b-0">
                                    <h5>Daily Sales</h5>
                                </div>
                                <div className="card-body">
                                    <div className="flex items-center justify-between gap-3 flex-wrap">
                                        <h3 className="font-light flex items-center mb-0">
                                            <i className="feather icon-arrow-up text-success-500 text-[30px] mr-1.5" />
                                            $ 249.95
                                        </h3>
                                        <p className="mb-0">67%</p>
                                    </div>
                                    <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mt-6 dark:bg-themedark-bodybg">
                                        <div
                                            className="bg-theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]"
                                            role="progressbar"
                                            style={{ width: "75%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-4 md:col-span-6">
                            <div className="card">
                                <div className="card-header !pb-0 !border-b-0">
                                    <h5>Monthly Sales</h5>
                                </div>
                                <div className="card-body">
                                    <div className="flex items-center justify-between gap-3 flex-wrap">
                                        <h3 className="font-light flex items-center mb-0">
                                            <i className="feather icon-arrow-down text-danger-500 text-[30px] mr-1.5" />
                                            $ 2.942.32
                                        </h3>
                                        <p className="mb-0">36%</p>
                                    </div>
                                    <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mt-6 dark:bg-themedark-bodybg">
                                        <div
                                            className="bg-theme-bg-2 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]"
                                            role="progressbar"
                                            style={{ width: "35%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-4">
                            <div className="card">
                                <div className="card-header !pb-0 !border-b-0">
                                    <h5>Yearly Sales</h5>
                                </div>
                                <div className="card-body">
                                    <div className="flex items-center justify-between gap-3 flex-wrap">
                                        <h3 className="font-light flex items-center mb-0">
                                            <i className="feather icon-arrow-up text-success-500 text-[30px] mr-1.5" />
                                            $8.638.32
                                        </h3>
                                        <p className="mb-0">80%</p>
                                    </div>
                                    <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mt-6 dark:bg-themedark-bodybg">
                                        <div
                                            className="bg-theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]"
                                            role="progressbar"
                                            style={{ width: "80%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-4">
                            <div className="card card-social">
                                <div className="card-body border-b border-theme-border dark:border-themedark-border">
                                    <div className="flex items-center justify-center">
                                        <div className="shrink-0">
                                            <i className="fab fa-facebook-f text-primary-500 text-[36px]" />
                                        </div>
                                        <div className="grow ltr:text-right rtl:text-left">
                                            <h3 className="mb-2">12,281</h3>
                                            <h5 className="text-success-500 mb-0">
                                                +7.2% <span className="text-muted">Total Likes</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="grid grid-cols-12 gap-x-6">
                                        <div className="col-span-6">
                                            <h6 className="text-center mb-2.5">
                                                <span className="text-muted m-r-5">Target:</span>35,098
                                            </h6>
                                            <div className="w-full bg-theme-bodybg rounded-lg h-1.5 dark:bg-themedark-bodybg">
                                                <div
                                                    className="bg-theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]"
                                                    role="progressbar"
                                                    style={{ width: "60%" }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <h6 className="text-center mb-2.5">
                                                <span className="text-muted m-r-5">Duration:</span>350
                                            </h6>
                                            <div className="w-full bg-theme-bodybg rounded-lg h-1.5 dark:bg-themedark-bodybg">
                                                <div
                                                    className="bg-theme-bg-2 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]"
                                                    role="progressbar"
                                                    style={{ width: "45%" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-4 md:col-span-6">
                            <div className="card card-social">
                                <div className="card-body border-b border-theme-border dark:border-themedark-border">
                                    <div className="flex items-center justify-center">
                                        <div className="shrink-0">
                                            <i className="fab fa-twitter text-primary-500 text-[36px]" />
                                        </div>
                                        <div className="grow ltr:text-right rtl:text-left">
                                            <h3 className="mb-2">11,200</h3>
                                            <h5 className="text-purple-500 mb-0">
                                                +6.2% <span className="text-muted">Total Likes</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="grid grid-cols-12 gap-x-6">
                                        <div className="col-span-6">
                                            <h6 className="text-center mb-2.5">
                                                <span className="text-muted m-r-5">Target:</span>34,185
                                            </h6>
                                            <div className="w-full bg-theme-bodybg rounded-lg h-1.5 dark:bg-themedark-bodybg">
                                                <div
                                                    className="bg-success-500 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]"
                                                    role="progressbar"
                                                    style={{ width: "40%" }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <h6 className="text-center mb-2.5">
                                                <span className="text-muted m-r-5">Duration:</span>800
                                            </h6>
                                            <div className="w-full bg-theme-bodybg rounded-lg h-1.5 dark:bg-themedark-bodybg">
                                                <div
                                                    className="bg-primary-500 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]"
                                                    role="progressbar"
                                                    style={{ width: "70%" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-4 md:col-span-6">
                            <div className="card card-social">
                                <div className="card-body border-b border-theme-border dark:border-themedark-border">
                                    <div className="flex items-center justify-center">
                                        <div className="shrink-0">
                                            <i className="fab fa-google-plus-g text-danger-500 text-[36px]" />
                                        </div>
                                        <div className="grow ltr:text-right rtl:text-left">
                                            <h3 className="mb-2">10,500</h3>
                                            <h5 className="text-purple-500 mb-0">
                                                +5.9% <span className="text-muted">Total Likes</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="grid grid-cols-12 gap-x-6">
                                        <div className="col-span-6">
                                            <h6 className="text-center mb-2.5">
                                                <span className="text-muted m-r-5">Target:</span>25,998
                                            </h6>
                                            <div className="w-full bg-theme-bodybg rounded-lg h-1.5 dark:bg-themedark-bodybg">
                                                <div
                                                    className="bg-theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]"
                                                    role="progressbar"
                                                    style={{ width: "80%" }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <h6 className="text-center mb-2.5">
                                                <span className="text-muted m-r-5">Duration:</span>900
                                            </h6>
                                            <div className="w-full bg-theme-bodybg rounded-lg h-1.5 dark:bg-themedark-bodybg">
                                                <div
                                                    className="bg-theme-bg-2 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]"
                                                    role="progressbar"
                                                    style={{ width: "50%" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-4 md:col-span-6">
                            <div className="card user-list">
                                <div className="card-header">
                                    <h5>Rating</h5>
                                </div>
                                <div className="card-body">
                                    <div className="flex items-center justify-between gap-1 mb-5">
                                        <h2 className="font-light flex items-center m-0">
                                            4.7
                                            <i className="fas fa-star text-[10px] ml-2.5 text-warning-500" />
                                        </h2>
                                        <h6 className="flex items-center m-0">
                                            0.4
                                            <i className="fas fa-caret-up text-success text-[22px] ml-2.5" />
                                        </h6>
                                    </div>
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <h6 className="flex items-center gap-1">
                                            <i className="fas fa-star text-[10px] mr-2.5 text-warning-500" />
                                            5
                                        </h6>
                                        <h6>384</h6>
                                    </div>
                                    <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mb-6 mt-3 dark:bg-themedark-bodybg">
                                        <div
                                            className="bg-theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]"
                                            role="progressbar"
                                            style={{ width: "70%" }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <h6 className="flex items-center gap-1">
                                            <i className="fas fa-star text-[10px] mr-2.5 text-warning-500" />
                                            4
                                        </h6>
                                        <h6>145</h6>
                                    </div>
                                    <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mb-6 mt-3 dark:bg-themedark-bodybg">
                                        <div
                                            className="bg-theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]"
                                            role="progressbar"
                                            style={{ width: "35%" }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <h6 className="flex items-center gap-1">
                                            <i className="fas fa-star text-[10px] mr-2.5 text-warning-500" />
                                            3
                                        </h6>
                                        <h6>24</h6>
                                    </div>
                                    <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mb-6 mt-3 dark:bg-themedark-bodybg">
                                        <div
                                            className="bg-theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]"
                                            role="progressbar"
                                            style={{ width: "25%" }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <h6 className="flex items-center gap-1">
                                            <i className="fas fa-star text-[10px] mr-2.5 text-warning-500" />
                                            2
                                        </h6>
                                        <h6>1</h6>
                                    </div>
                                    <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mb-6 mt-3 dark:bg-themedark-bodybg">
                                        <div
                                            className="bg-theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]"
                                            role="progressbar"
                                            style={{ width: "10%" }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <h6 className="flex items-center gap-1">
                                            <i className="fas fa-star text-[10px] mr-2.5 text-warning-500" />
                                            1
                                        </h6>
                                        <h6>0</h6>
                                    </div>
                                    <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mt-4 dark:bg-themedark-bodybg">
                                        <div
                                            className="bg-theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)]"
                                            role="progressbar"
                                            style={{ width: "0%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-8 md:col-span-6">
                            <div className="card table-card">
                                <div className="card-header">
                                    <h5>Recent Users</h5>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <tbody>
                                                <tr className="unread">
                                                    <td>
                                                        <img
                                                            className="rounded-full max-w-10"
                                                            style={{ width: 40 }}
                                                            src="../assets/images/user/avatar-1.jpg"
                                                            alt="activity-user"
                                                        />
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-1">Isabella Christensen</h6>
                                                        <p className="m-0">
                                                            Lorem Ipsum is simply dummy text of…
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <h6 className="text-muted">
                                                            <i className="fas fa-circle text-success text-[10px] ltr:mr-4 rtl:ml-4" />
                                                            11 MAY 12:56
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <a
                                                            href="#!"
                                                            className="badge bg-theme-bg-2 text-white text-[12px] mx-2"
                                                        >
                                                            Reject
                                                        </a>
                                                        <a
                                                            href="#!"
                                                            className="badge bg-theme-bg-1 text-white text-[12px]"
                                                        >
                                                            Approve
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="unread">
                                                    <td>
                                                        <img
                                                            className="rounded-full max-w-10"
                                                            style={{ width: 40 }}
                                                            src="../assets/images/user/avatar-2.jpg"
                                                            alt="activity-user"
                                                        />
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-1">Mathilde Andersen</h6>
                                                        <p className="m-0">
                                                            Lorem Ipsum is simply dummy text of…
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <h6 className="text-muted">
                                                            <i className="fas fa-circle text-danger text-[10px] ltr:mr-4 rtl:ml-4" />
                                                            11 MAY 10:35
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <a
                                                            href="#!"
                                                            className="badge bg-theme-bg-2 text-white text-[12px] mx-2"
                                                        >
                                                            Reject
                                                        </a>
                                                        <a
                                                            href="#!"
                                                            className="badge bg-theme-bg-1 text-white text-[12px]"
                                                        >
                                                            Approve
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="unread">
                                                    <td>
                                                        <img
                                                            className="rounded-full max-w-10"
                                                            style={{ width: 40 }}
                                                            src="../assets/images/user/avatar-3.jpg"
                                                            alt="activity-user"
                                                        />
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-1">Karla Sorensen</h6>
                                                        <p className="m-0">
                                                            Lorem Ipsum is simply dummy text of…
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <h6 className="text-muted">
                                                            <i className="fas fa-circle text-success text-[10px] ltr:mr-4 rtl:ml-4" />
                                                            9 MAY 17:38
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <a
                                                            href="#!"
                                                            className="badge bg-theme-bg-2 text-white text-[12px] mx-2"
                                                        >
                                                            Reject
                                                        </a>
                                                        <a
                                                            href="#!"
                                                            className="badge bg-theme-bg-1 text-white text-[12px]"
                                                        >
                                                            Approve
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="unread">
                                                    <td>
                                                        <img
                                                            className="rounded-full max-w-10"
                                                            style={{ width: 40 }}
                                                            src="../assets/images/user/avatar-1.jpg"
                                                            alt="activity-user"
                                                        />
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-1">Ida Jorgensen</h6>
                                                        <p className="m-0">
                                                            Lorem Ipsum is simply dummy text of…
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <h6 className="text-muted f-w-300">
                                                            <i className="fas fa-circle text-danger text-[10px] ltr:mr-4 rtl:ml-4" />
                                                            19 MAY 12:56
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <a
                                                            href="#!"
                                                            className="badge bg-theme-bg-2 text-white text-[12px] mx-2"
                                                        >
                                                            Reject
                                                        </a>
                                                        <a
                                                            href="#!"
                                                            className="badge bg-theme-bg-1 text-white text-[12px]"
                                                        >
                                                            Approve
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="unread">
                                                    <td>
                                                        <img
                                                            className="rounded-full max-w-10"
                                                            style={{ width: 40 }}
                                                            src="../assets/images/user/avatar-2.jpg"
                                                            alt="activity-user"
                                                        />
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-1">Albert Andersen</h6>
                                                        <p className="m-0">
                                                            Lorem Ipsum is simply dummy text of…
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <h6 className="text-muted">
                                                            <i className="fas fa-circle text-success text-[10px] ltr:mr-4 rtl:ml-4" />
                                                            21 July 12:56
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <a
                                                            href="#!"
                                                            className="badge bg-theme-bg-2 text-white text-[12px] mx-2"
                                                        >
                                                            Reject
                                                        </a>
                                                        <a
                                                            href="#!"
                                                            className="badge bg-theme-bg-1 text-white text-[12px]"
                                                        >
                                                            Approve
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* [ Main Content ] end */}
                </div>
            </div>
        </>
    )
}

export default PageAdmin