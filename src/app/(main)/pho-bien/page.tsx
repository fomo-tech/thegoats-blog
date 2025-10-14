import MainContent from "@/components/layouts/main/MainContent";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";
import PopularContainer from "./component/PopularContainer";

const PopularPage = async () => {
  return (
    <>
      <PageHeader
        title={"Bài viết phổ biến"}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Bài viết phổ biến" },
        ]}
      />
      <MainContent>
        <PopularContainer />
      </MainContent>
    </>
  );
};

export default PopularPage;
