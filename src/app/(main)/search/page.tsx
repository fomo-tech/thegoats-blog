import Breadcrumb from "@/components/ Breadcrumb";
import MainContent from "@/components/layouts/main/MainContent";
import PageHeader from "@/components/ui/PageHeader";
import { mainRoutes } from "@/routes/main";
import React from "react";
import SearchContainer from "./component/SearchContainer";
import { SearchParams } from "@/types";

const SearchPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const sp = await searchParams;
  const keyword = sp.q || "";
  return (
    <>
      <PageHeader
        title={"Tìm kiếm"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tìm kiếm cho #" + keyword },
        ]}
      />
      <MainContent>
        <SearchContainer query={keyword} />
      </MainContent>
      ;
    </>
  );
};

export default SearchPage;
