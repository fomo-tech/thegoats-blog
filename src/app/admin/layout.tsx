import "@/styles/admin/index.css";
import { ToastContainer } from "react-toastify";
import { AdminProviders } from "./AdminProvider";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import NextTopLoader from "nextjs-toploader";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning={true} data-pc-direction="ltr" dir="ltr">
        <AdminProviders initialSession={session}>{children}</AdminProviders>
        <ToastContainer />
        <NextTopLoader
          color="linear-gradient(-135deg, #1de9b6 0%, #1dc4e9 100%)"
          initialPosition={0.1}
          crawlSpeed={300}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={400}
          shadow="0 0 10px #1de9b6,0 0 5px #1dc4e9"
        />
      </body>
    </html>
  );
}
