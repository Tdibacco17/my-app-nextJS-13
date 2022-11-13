import Link from "next/link"
import LikeButton from "./LikeButton"

const fetchPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function ListOfPosts() {
    const posts = await fetchPosts()


    return (
        <>
            {posts.slice(0, 5).map(e => {
                return (
                    <article key={e.id}>
                        <Link href={"/posts/[id]"} as={`/posts/${e.id}`}>
                            <h2 style={{ color: "#09f" }}>{e.title}</h2>
                            <p>{e.body}</p>
                            <LikeButton />
                        </Link>
                    </article>
                )
            })}
        </>
    )
}