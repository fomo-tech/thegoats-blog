import '@/styles/admin/index.css'
import { ToastContainer } from 'react-toastify'
import { AdminProviders } from './AdminProvider'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const supabase = createServerComponentClient({ cookies })
    const {
        data: { session },
    } = await supabase.auth.getSession()

    return (
        <html suppressHydrationWarning>

            <body suppressHydrationWarning={true} data-pc-direction="ltr" dir="ltr" >
                <AdminProviders initialSession={session}>
                    {children}
                </AdminProviders>
                <ToastContainer />
            </body>
        </html>
    )
}
