import BlogPostList from "../../../../components/BlogPostList";
import { getYears, getPostsByYear } from "../../../../lib/hygraph.client";

export default async function Page({ params: { slug } }) {

    const yearPosts = await getPostsByYear(slug);

    return (
        <div>
            <h1 className="mb-4">Posts from {slug}</h1>
            <BlogPostList posts={yearPosts} />
        </div>
    )
}

export const revalidate = 15;

export async function generateStaticParams() {
    const years = await getYears();

    return years.map((year) => ({
        slug: year.slug,
    }))
}