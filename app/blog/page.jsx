async function getPosts() {
    const res = await fetch("http://localhost:3000/api/posts");
    
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Page() {
    // let data = use(getPosts());
    const data = await getPosts();
    console.log(data.posts.posts[0].title)

    return (
        <div>
            <header>Blog posts</header>
            <ul>
                {data.posts.posts.map((post) => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}