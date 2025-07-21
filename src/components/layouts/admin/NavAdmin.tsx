import React from 'react'

const NavAdmin = () => {
    return (
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
    )
}

export default NavAdmin