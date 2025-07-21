import '@/styles/admin/index.css'
import { ToastContainer } from 'react-toastify'
import { AdminProviders } from './AdminProvider'
import NavAdmin from '@/components/layouts/admin/NavAdmin'
import HeaderAdmin from '@/components/layouts/admin/HeaderAdmin'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning>

            <body suppressHydrationWarning={true} data-pc-direction="ltr" dir="ltr" >
                <AdminProviders>
                    <main>
                        <NavAdmin />
                        <HeaderAdmin />
                        <div className="pc-container">
                            {children}
                        </div>
                    </main>
                </AdminProviders>

                <ToastContainer />

            </body>
        </html>
    )
}
