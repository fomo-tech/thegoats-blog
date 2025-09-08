


import MainContent from "@/components/layouts/main/MainContent"
import PageHeader from "@/components/ui/PageHeader"
import CategoryContainer from "./component/CategoryContainer"
import { getCategoryBySlug } from "@/lib/db/categories"
import { notFound } from "next/navigation";

interface CategoryPageProps {
    params: Promise<{ slug: string }>;
}


const CategoryPage = async ({ params }: CategoryPageProps) => {
    const { slug } = await params;
    const category = await getCategoryBySlug(slug)

    if (!category) return notFound()
    return (
        <>
            <PageHeader
                title={category?.name}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: category?.name, href: `/category/${category.slug}` }
                ]}
            />
            <MainContent>
                <CategoryContainer categorySlug={slug} />
            </MainContent>
        </>
    )
}

export default CategoryPage