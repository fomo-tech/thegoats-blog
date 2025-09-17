


import MainContent from "@/components/layouts/main/MainContent"
import PageHeader from "@/components/ui/PageHeader"
import CategoryContainer from "./component/CategoryContainer"
import { getTagBySlug } from "@/lib/db/categories"
import { notFound } from "next/navigation";

interface TagPageProps {
    params: Promise<{ slug: string }>;
}


const TagPage = async ({ params }: TagPageProps) => {
    const { slug } = await params;
    const tag = await getTagBySlug(slug)

    if (!tag) return notFound()
    return (
        <>
            <PageHeader
                title={`#${tag?.name}`}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: `#${tag?.name}`, href: `/tag/${tag.slug}` }
                ]}
            />
            <MainContent tagCategrory={slug}>
                1
            </MainContent>
        </>
    )
}

export default TagPage