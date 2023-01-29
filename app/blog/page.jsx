import Link from "next/link";
import ArchiveList from "../../components/ArchiveList";
import BlogPostList from "../../components/BlogPostList";
import { getCategories, getPostsConnection } from "../../lib/hygraph.client";

export default async function Page() {
    const data = await getPostsConnection();
    const posts = data.edges
    // console.log(posts);

    const categories = await getCategories();

    return (
        <div>
            <h1 className="mb-4">Blog Posts</h1>
            <BlogPostList posts={posts} />
            <div>
                <ArchiveList />
            </div>
            <div>
                <h1 className="text-xl mt-4">Categories</h1>
                <ul>
                    {categories.map((category) => {
                        return (
                            <li key={category.id}>
                                <Link href={`/blog/category/${category.slug}`}>{category.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export const revalidate = 15;