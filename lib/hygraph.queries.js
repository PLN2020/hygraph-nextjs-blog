import { gql } from "graphql-request";

export const indexQuery = gql`
    {
        posts {
            id
            title
            slug
            category {
                slug
            }
        }
    }
`

export const postBySlugQuery = gql`
    query GetPostBySlug($slug : String!) {
        post(where: {slug: $slug}) {
            id
            title
            excerpt
            createdAt
            publishedAt
            content {
                raw
            }
            category {
                name
            }
            featuredImage {
                url
                fileName
                width
                height
            }
        }
    }
`

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
                }
            }
        }
    }
`

export const yearsQuery = gql`
    query GetYears {
        years {
            id
            slug
            title
        }
    }
`

// date format example 2022-01-01T00:00:00.20019+00:00
export const postsByYearQuery = gql`
    query GetPostsByYear($slug: String) {
        posts(where: {year: {slug: $slug}}) {
            id
            title
            excerpt
            slug
            year {
                title
            }
        }
    }
`

export const categoriesQuery = gql`
    query GetCategories {
        categories {
            name
            slug
            id
        }
    }
`

export const postsByCategoryQuery = gql`
    query GetPostsByCategory($slug: String) {
        posts(where: {category_some: {slug: $slug}}) {
            id
            title
            excerpt
            slug
            category {
                name
            }
        }
    }
`