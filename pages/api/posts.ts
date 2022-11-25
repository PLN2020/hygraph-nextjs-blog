import { GraphQLClient, gql } from 'graphql-request';

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT)

const postsQuery = gql`
    {
        posts {
            content {
              html
            }
            author {
              name
              bio
              photo {
                url
              }
            }
            excerpt
            featuredImage {
              url
            }
            featuredPost
            id
            title
            slug
            publishedAt
            tags {
              name
              slug
            }
          }
    }
`

export default async function handler( req, res ) {
    const posts = await hygraph.request(postsQuery);
    res.status(200).json({ posts })
}