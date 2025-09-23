import Breadcrumb from "@/components/ Breadcrumb";
import MainContent from "@/components/layouts/main/MainContent";
import PageHeader from "@/components/ui/PageHeader";
import { mainRoutes } from "@/routes/main";
import React from "react";
import SearchContainer from "./component/SearchContainer";

interface SearchPageProps {
  searchParams: { q?: string };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  const query = searchParams.q || "";

  return (
    <>
      <PageHeader
        title={"Tìm kiếm"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tìm kiếm cho #" + query },
        ]}
      />
      <MainContent>
        <SearchContainer query={query} />
      </MainContent>
      ;
    </>
  );
};

export default SearchPage;
