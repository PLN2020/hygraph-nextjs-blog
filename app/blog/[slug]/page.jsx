import BlogRichText from "../../../components/BlogRichText";
import { getPostBySlug, getPosts } from "../../../lib/hygraph.client";

export default async function Page({ params: { slug } }) {

    const post = await getPostBySlug(slug)

    return (
        <div>
            <h1 className="font-mono">{post.title}</h1>
            <p>{post.excerpt}</p>
            <BlogRichText content={post.content.raw} />
        </div>
    )
}

export const revalidate = 15;

export async function generateStaticParams() {
    const posts = await getPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}