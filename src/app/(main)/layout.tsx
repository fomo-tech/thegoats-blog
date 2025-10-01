import MainLayout from "@/components/layouts/MainLayout";
import { getSettings } from "@/services/setting";
import "@/styles/main/index.css";
import { Lora } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings();
  return (
    <html className={lora.className}>
      <body suppressHydrationWarning={true}>
        <NextTopLoader
          color="#fe4f70"
          initialPosition={0.1}
          crawlSpeed={300}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={400}
          shadow="0 0 10px #fe4f70,0 0 5px #fe4f70"
        />
        <MainLayout settings={settings}>{children}</MainLayout>
      </body>
    </html>
  );
}
