import BlogPostList from "../../components/BlogPostList";
import { getPostsConnection } from "../../lib/hygraph.client";

export default async function Page() {
    const data = await getPostsConnection(10);
    const posts = data.edges

    return (
        <div>
            <h1 className="mb-4">Blog Posts</h1>
            <BlogPostList posts={posts} />
        </div>
    )
}

export const revalidate = 15;