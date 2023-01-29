import ArchiveList from "../../components/ArchiveList";
import BlogPostList from "../../components/BlogPostList";
import { getPosts, getPostsConnection } from "../../lib/hygraph.client";

export default async function Page() {
    const data = await getPostsConnection(10);
    const posts = data.edges
    // console.log(posts);

    return (
        <div>
            <h1 className="mb-4">Blog Posts</h1>
            <BlogPostList posts={posts} />
            <div>
                <ArchiveList />
            </div>
        </div>
    )
}

export const revalidate = 15;