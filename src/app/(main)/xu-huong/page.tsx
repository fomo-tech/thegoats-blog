import MainContent from "@/components/layouts/main/MainContent";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";
import TrendingPageContainer from "./component/TrendingPageContainer";

const TrendingPage = () => {
  return (
    <>
      <PageHeader
        title={"Bài viết xu hướng"}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Bài viết xu hướng" },
        ]}
      />
      <MainContent>
        <TrendingPageContainer />
      </MainContent>
    </>
  );
};

export default TrendingPage;
