'use client'

import React from 'react'
import SidebarWidget from './SidebarWidget'

interface MainContentProps {
    children: React.ReactNode,
    breadcrumb?: React.ReactNode,
}
const MainContent = ({ children, breadcrumb }: MainContentProps) => {
    return (
        <section className="main-content">
            <div className="container-xl">
                {breadcrumb && breadcrumb}
                <div className="row gy-4">
                    <div className="col-lg-8">
                        {children}
                    </div>
                    <div className="col-lg-4">
                        {/* sidebar */}
                        <div className="sidebar">
                            <SidebarWidget />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainContent