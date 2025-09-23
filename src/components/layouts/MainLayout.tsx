"use client";

import React from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import CoinGeckoMarquee from "../ui/CoinMarquee";
import Script from "next/script";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const MainLayout = ({ children }: Props) => {
  // const pathname = usePathname()
  return (
    <>
      <Script
        src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js"
        strategy="afterInteractive"
      ></Script>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <MainHeader />

        <CoinGeckoMarquee />
        {/* Main content */}
        <main className="flex-1 mx-auto px-4 py-6">{children}</main>

        {/* Footer */}
        <MainFooter />
      </div>
    </>
  );
};

export default MainLayout;
