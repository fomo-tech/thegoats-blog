'use client'

import React, { useEffect } from "react";

const CoinGeckoMarquee: React.FC = () => {

    return React.createElement("gecko-coin-price-marquee-widget", {
        locale: "en",
        "initial-currency": "usd",
    });
};

export default CoinGeckoMarquee;
