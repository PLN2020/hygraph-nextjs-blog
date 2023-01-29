import Link from "next/link";
import { getCategories, getPostsByCategory } from "../../../../lib/hygraph.client";

export default async function Page({ params: { slug } }) {

    const categoryPosts = await getPostsByCategory(slug);
    console.log(categoryPosts);
    
    const slugWords = slug.split("-");
    const categoryName = slugWords.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");


    return (
        <div>
            <h1 className="mb-4">Posts from {categoryName}</h1>
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