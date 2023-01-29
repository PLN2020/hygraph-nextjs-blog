import Link from "next/link";
import { getCategories, getPostsByCategory } from "../../../../lib/hygraph.client";

export default async function Page({ params: { slug } }) {

    const categoryPosts = await getPostsByCategory(slug);
    console.log(categoryPosts);

    return (
        <div>
            <h1 className="mb-4">Posts from {categoryPosts[0].category[0].name}</h1>
            {categoryPosts.map((post) => (
                <div key={post.id}>
                    <Link href={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export const revalidate = 15;

export async function generateStaticParams() {
    const categories = await getCategories();

    return categories.map((category) => ({
        slug: category.slug,
    }))
}