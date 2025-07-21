import MainLayout from "@/components/layouts/MainLayout";
import '@/styles/main/index.css'
// app/admin/layout.tsx
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body suppressHydrationWarning={true} >
                {/* Không có header/footer hoặc bạn có thể custom riêng */}
                <MainLayout>
                    {children}
                </MainLayout>
            </body>
        </html>
    )
}
