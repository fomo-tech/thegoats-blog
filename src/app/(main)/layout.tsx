import MainLayout from "@/components/layouts/MainLayout";
import '@/styles/main/index.css'
// app/admin/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body suppressHydrationWarning={true} >

                <MainLayout>
                    {children}
                </MainLayout>
            </body>
        </html>
    )
}
