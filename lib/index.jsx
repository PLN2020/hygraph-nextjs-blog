import { GraphQLClient, gql } from "graphql-request";

const hygraph = new GraphQLClient(
    process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT
);

export const getPosts = async () => {
    const QUERY = gql`
        {
            posts {
                id
                title
                slug
            }
        }
    `;
    
    const result = await hygraph.request(QUERY);
    return result;
};

export const getPostBySlug = async (slug) => {
    const QUERY = gql`
            query GetPostBySlug($slug : String!) {
                post(where: {slug: $slug}) {
                    title
                    excerpt
                }
            }
    `;

    const result = await hygraph.request(QUERY, { slug });
    return result.post;
}