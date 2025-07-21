import React from 'react'

const HeaderAdmin = () => {
    return (
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
    )
}

export default HeaderAdmin