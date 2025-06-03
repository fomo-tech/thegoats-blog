

import '@/styles/admin/index.css'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning>

            <body suppressHydrationWarning={true} >
                <main>{children}</main>
            </body>
        </html>
    )
}
