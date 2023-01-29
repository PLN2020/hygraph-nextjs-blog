import { gql } from "graphql-request";

export const indexQuery = gql`
    {
        posts {
            id
            title
            slug
            year
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

// export const postsConnectionQuery = gql`
//     query GetPostsConnection($first: Int) {
//         postsConnection(first: $first) {
//             edges{
//                 node {
//                     id
//                     title
//                     slug
//                 }
//             }
//             pageInfo {
//                 hasNextPage
//                 hasPreviousPage
//                 pageSize
//             }
//         }
//     }
// `

export const postsConnectionQuery = gql`
    query GetPostsConnection {
        postsConnection {
            edges {
                node {
                    excerpt
                    featuredImage {
                        url
                    }
                    id
                    publishedAt
                    slug
                    title
                    year
                }
            }
        }
    }
`

// date format example 2022-01-01T00:00:00.20019+00:00
export const postsByYearQuery = gql`
    query GetPostsByYear($year: Int) {
        posts(where: {year: $year}) {
            id
            title
            excerpt
        }
    }
`