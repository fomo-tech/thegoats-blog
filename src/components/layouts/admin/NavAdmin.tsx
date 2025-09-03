'use client'

import { adminMenu } from '@/routes/admin'
import React from 'react'
import MenuItem from './MenuItem'
import { useGlobalStore } from '@/store/useGlobalStore'
import clsx from 'clsx'
import { filterMenuByRole } from '@/routes/filterMenu'
import { useSession } from '@supabase/auth-helpers-react'

const userRole: 'admin' | 'writer' = 'admin'

const NavAdmin = () => {
    const { isToggleNav, handleToggleNav } = useGlobalStore()


    const visibleMenu = filterMenuByRole(adminMenu, userRole)

    return (
        <nav className={clsx("pc-sidebar pc-trigger", {
            "mob-sidebar-active": isToggleNav
        })}>
            <div className="navbar-wrapper" style={{ display: "block" }}>
                <div className="m-header flex items-center py-4 px-6 h-header-height">
                    <a
                        href="../dashboard/index.html"
                        className="b-brand flex items-center gap-3"
                    >
                        {/* ========   Change your logo from here   ============ */}
                        {/* <img
                            src="../assets/images/logo-white.svg"
                            className="img-fluid logo logo-lg"
                            alt="logo"
                        />
                        <img
                            src="../assets/images/favicon.svg"
                            className="img-fluid logo logo-sm"
                            alt="logo"
                        /> */}
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
                                            {visibleMenu.map((group, idx) => (
                                                <React.Fragment key={group.key || idx}>
                                                    <li className="pc-item pc-caption">
                                                        <label>{group.label}</label>
                                                    </li>
                                                    {group.children?.map((menu) => (
                                                        <MenuItem key={menu.key} menu={menu} />
                                                    ))}
                                                </React.Fragment>
                                            ))}

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
            {
                isToggleNav && <div className="pc-menu-overlay" onClick={handleToggleNav}></div>
            }
        </nav>
    )
}

export default NavAdmin