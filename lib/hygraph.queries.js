import { gql } from "graphql-request";

export const indexQuery = gql`
    {
        posts {
            id
            title
            slug
        }
    }
`

export const postBySlugQuery = gql`
    query GetPostBySlug($slug : String!) {
        post(where: {slug: $slug}) {
            title
            excerpt
        }
    }
`

export const postsConnectionQuery = gql`
    query GetPostsConnection($first: Int) {
        postsConnection(first: $first) {
            edges{
                node {
                    id
                    title
                    slug
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                pageSize
            }
        }
    }
`