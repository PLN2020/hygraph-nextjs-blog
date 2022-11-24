import { GraphQLClient, gql } from 'graphql-request';

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT)

const QUERY = gql`
    {
        postsConnection {
            edges {
                node {
                    author {
                        bio
                        id
                        name
                        photo {
                            url
                        }
                    }
                    createdAt
                    slug
                    title
                    excerpt
                    featuredImage {
                        url
                    }
                    content {
                        html
                    }
                }
            }
        }
    }
`

export default async function handler( req, res ) {
    const posts = await hygraph.request(QUERY);
    res.status(200).json({ posts })
}

// export async function getStaticProps() {
//     const { posts } = await hygraph.request(QUERY)

//     return {
//         props: {
//         posts
//         }
//     }
// }