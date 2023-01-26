import { GraphQLClient, gql } from "graphql-request";
import { indexQuery, postBySlugQuery } from "./hygraph.queries";

const hygraph = new GraphQLClient(
    process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT
);

export async function getPosts() {
    const result = await hygraph.request(indexQuery);
    return result;
};

export const getPostsConnection = async (first) => {

    const QUERY = gql`
        query MyQuery($first: Int) {
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
    
    const result = await hygraph.request(QUERY, { first });
    return result.postsConnection;
};

export const getPostBySlug = async (slug) => {
    const result = await hygraph.request(postBySlugQuery, { slug });
    return result.post;
};