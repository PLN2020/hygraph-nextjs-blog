import Link from "next/link";
import { getPosts } from "../../lib";

export default async function Page() {
    const { posts } = await getPosts();

    return (
        <div>
            <h1>Blog Posts</h1>

            <ul>
                {posts.map(({ id, title, slug }) => (
                    <li key={id}>
                        <Link
                            href={`/blog/${slug}`}
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const revalidate = 60;