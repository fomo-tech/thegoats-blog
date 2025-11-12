import MainContent from "@/components/layouts/main/MainContent";
import PageHeader from "@/components/ui/PageHeader";

import { getCategoryBySlug } from "@/lib/db/categories";
import { notFound } from "next/navigation";
import CategoryContainer from "./component/CategoryContainer";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) return notFound();
  return (
    <>
      <PageHeader
        title={category?.name}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: category?.name, href: `/the-loai/${category.slug}` },
        ]}
      />
      <MainContent slugCategory={slug}>
        <CategoryContainer categorySlug={slug} />
      </MainContent>
    </>
  );
};

export default CategoryPage;
