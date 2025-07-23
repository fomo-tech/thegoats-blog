'use client'


import NavAdmin from '@/components/layouts/admin/NavAdmin'
import HeaderAdmin from '@/components/layouts/admin/HeaderAdmin'
import { useSession } from '@supabase/auth-helpers-react'

export default function AdminLayoutShell({ children }: { children: React.ReactNode }) {
    const session = useSession()

    return (
        <main>
            {session && (
                <>
                    <NavAdmin />
                    <HeaderAdmin />
                </>
            )}

            <div className="pc-container">
                {children}
            </div>
        </main>
    )
}
