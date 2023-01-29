import { GraphQLClient } from "graphql-request";
import { categoriesQuery, indexQuery, postBySlugQuery, postsByCategoryQuery, postsByYearQuery, postsConnectionQuery } from "./hygraph.queries";

const hygraph = new GraphQLClient(
    process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT
);

export async function getPosts() {
    const result = await hygraph.request(indexQuery);
    return result.posts;
};

export const getPostsConnection = async (first) => {    
    const result = await hygraph.request(postsConnectionQuery, { first });
    return result.postsConnection;
};

export const getPostBySlug = async (slug) => {
    const result = await hygraph.request(postBySlugQuery, { slug });
    return result.post;
};

export const getPostsByYear = async (year) => {
    const result = await hygraph.request(postsByYearQuery, { year });
    return result;
};

export const getPostsByCategory = async (slug) => {
    const result = await hygraph.request(postsByCategoryQuery, { slug });
    return result.posts;
};

export const getCategories = async () => {
    const result = await hygraph.request(categoriesQuery);
    return result.categories;
}