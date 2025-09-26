import MainContent from "@/components/layouts/main/MainContent";
import PopularPosts from "@/components/sections/PopularPosts";
import HeroSection from "@/components/sections/HeroSection";
import LatestPost from "@/components/sections/LatestPost";
import TrendingPosts from "@/components/sections/TrendingPosts";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <MainContent>
        {/* section header */}
        <PopularPosts />
        <div
          className="spacer"
          style={{
            height: "30px",
          }}
        />
        {/* horizontal ads */}
        <div className="ads-horizontal text-md-center">
          <span className="ads-title">- Sponsored Ad -</span>
          <a href="index.html#">
            <img src="https://placehold.co/800x120" alt="Advertisement" />
          </a>
        </div>
        <div
          className="spacer"
          style={{
            height: "30px",
          }}
        />
        {/* section header */}

        <div
          className="spacer"
          style={{
            height: "30px",
          }}
        />
        <TrendingPosts />
        <div
          className="spacer"
          style={{
            height: "30px",
          }}
        />
        <LatestPost />
      </MainContent>
    </>
  );
};

export default HomePage;
