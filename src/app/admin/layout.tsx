import '@/styles/admin/index.css'
import { ToastContainer } from 'react-toastify'
import { AdminProviders } from './AdminProvider'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning>

            <body suppressHydrationWarning={true} >
                <AdminProviders>
                    <main>{children}</main>
                </AdminProviders>

                <ToastContainer />

            </body>
        </html>
    )
}
