import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";

const hygraph = new GraphQLClient(
    process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT
);

const QUERY = gql`
  {
    posts {
      id
      title
      slug
    }
  }
`

export default async function Page() {
    const { posts } = await hygraph.request(QUERY)

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