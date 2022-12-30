import { getPostBySlug, getPosts } from "../../../lib";

export const revalidate = 60;

export async function generateStaticParams() {
    const { posts } = await getPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Page({ params: { slug } }) {

    const post = await getPostBySlug(slug)

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
        </div>
    )
}