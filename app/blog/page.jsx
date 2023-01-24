import Link from "next/link";
import { getPostsConnection } from "../../lib/hygraph.client";

export default async function Page() {
    const data = await getPostsConnection();
    const posts = data.edges

    return (
        <div>
            <h1>Blog Posts</h1>

            <ul>
                {posts.map((post) => (
                    <li key={post.node.id}>
                        <Link
                            href={`/blog/${post.node.slug}`}
                        >
                            {post.node.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const revalidate = 15;