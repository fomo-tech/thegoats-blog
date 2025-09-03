'use client'

import React from 'react'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'


type Props = {
    children: React.ReactNode
    title?: string
}

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                {/* Header */}
                <MainHeader />
                {/* Main content */}
                <main className="flex-1 container-xxl mx-auto px-4 py-6">
                    {children}
                </main>

                {/* Footer */}
                <MainFooter />
            </div>
        </>
    )
}

export default MainLayout
