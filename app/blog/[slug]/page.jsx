import Image from "next/image";
import BlogRichText from "../../../components/BlogRichText";
import { getPostBySlug, getPosts } from "../../../lib/hygraph.client";

export default async function Page({ params: { slug } }) {

    const post = await getPostBySlug(slug)
    const creationDate = new Date(post.createdAt).toLocaleDateString('en-us',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
    );

    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h1 className="font-serif text-6xl mt-10 mb-6">{post.title}</h1>
                    <div className="border text-xs p-2 inline">
                        {creationDate}
                    </div>
                    <div>
                        Tags
                    </div>
                </div>
                <div className="relative object-cover w-[300px] h-[300px] overflow-hidden">
                    <Image 
                        src={post.featuredImage.url}
                        alt={post.featuredImage.fileName}
                        fill={true}
                        className="object-cover"
                    />
                </div>
            </div>
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