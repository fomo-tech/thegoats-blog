"use client";

import React from "react";

const CoinGeckoMarquee: React.FC = () => {
  return React.createElement("gecko-coin-price-marquee-widget", {
    locale: "en",
    "initial-currency": "usd",
    style: { fontSize: "20px", fontWeight: "700" }, // ✅ object thay vì string
  });
};

export default CoinGeckoMarquee;
