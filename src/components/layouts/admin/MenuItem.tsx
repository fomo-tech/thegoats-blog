'use client';

import { AdminRouteKey, adminRoutes, IMenuItem } from '@/routes/admin';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MenuItem: React.FC<{ menu: IMenuItem }> = ({ menu }) => {
    const pathname = usePathname();
    const route = adminRoutes(menu.key as AdminRouteKey);
    const isActive = route === pathname;
    const [showSubMenu, setShowSubMenu] = useState(false);

    useEffect(() => {
        const isCurrentOrChildActive = (item: IMenuItem): boolean => {
            const itemRoute = adminRoutes(item.key as AdminRouteKey);
            if (pathname === itemRoute) return true;
            if (item.children) {
                return item.children.some((child) => isCurrentOrChildActive(child));
            }
            return false;
        };

        if (isCurrentOrChildActive(menu)) {
            setShowSubMenu(true);
        } else {
            setShowSubMenu(false);
        }
    }, [pathname, menu]);

    return (
        <li
            className={clsx('pc-item', {
                'pc-hasmenu': !!menu.children,
                'pc-trigger': showSubMenu,
                active: isActive
            })}
        >
            {
                !!menu.children ? (
                    <>
                        <Link href={"#!"} className="pc-link" onClick={() => setShowSubMenu(!showSubMenu)}>
                            <span className="pc-micon">{menu.icon}</span>
                            <span className="pc-mtext">{menu.label}</span>
                            <span className="pc-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </Link>
                    </>
                ) : (
                    <Link href={route} className="pc-link">
                        <span className="pc-micon">{menu.icon}</span>
                        <span className="pc-mtext">{menu.label}</span>
                    </Link>
                )
            }

            {menu.children && (
                <ul className="pc-submenu" style={{ display: showSubMenu ? "block" : "none" }}>
                    {menu.children.map((child) => (
                        <MenuItem key={child.key} menu={child} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuItem;
