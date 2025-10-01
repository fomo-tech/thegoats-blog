"use client";

import React, { useEffect } from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import CoinGeckoMarquee from "../ui/CoinMarquee";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { ISetting, SettingMap } from "@/types/setting";
import { useGlobalStore } from "@/store/useGlobalStore";

type Props = {
  children: React.ReactNode;
  title?: string;
  settings: SettingMap;
};

const MainLayout = ({ children, settings }: Props) => {
  // const pathname = usePathname()
  const { setSettings } = useGlobalStore();

  useEffect(() => {
    setSettings(settings);
  }, [settings]);

  return (
    <>
      <Script
        src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js"
        strategy="afterInteractive"
      ></Script>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <MainHeader settings={settings} />

        <CoinGeckoMarquee />
        {/* Main content */}
        <main className="flex-1 mx-auto px-4 py-6">{children}</main>

        {/* Footer */}
        <MainFooter settings={settings} />
      </div>
    </>
  );
};

export default MainLayout;
