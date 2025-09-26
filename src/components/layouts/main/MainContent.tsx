import React from "react";
import SidebarWidget from "./SidebarWidget";

interface MainContentProps {
  children: React.ReactNode;
  breadcrumb?: React.ReactNode;
  slugCategory?: string;
  tagCategrory?: string;
}
const MainContent = ({
  children,
  breadcrumb,
  slugCategory,
  tagCategrory,
}: MainContentProps) => {
  return (
    <section className="main-content">
      <div className="max-w-[1280px] mx-auto">
        {breadcrumb && breadcrumb}
        <div className="row gy-4">
          <div className="col-lg-8">{children}</div>
          <div className="col-lg-4">
            {/* sidebar */}
            <div className="sidebar sticky top-0">
              <SidebarWidget
                slugCategory={slugCategory}
                tagCategrory={tagCategrory}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
