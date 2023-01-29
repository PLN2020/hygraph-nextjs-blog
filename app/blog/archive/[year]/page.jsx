import { getPostsByYear } from "../../../../lib/hygraph.client";

export default async function Page({ params: { year } }) {

    const posts = await getPostsByYear(year)

    return (
        <div>
            {posts}
        </div>
    )
}

export const revalidate = 15;