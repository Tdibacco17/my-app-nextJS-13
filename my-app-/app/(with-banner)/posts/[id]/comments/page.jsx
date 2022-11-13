import Image from "next/image"

const fetchComments = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 3000))

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function Comments({ params }) {
    const { id } = params
    const comments = await fetchComments(id)

    return (
        <ul style={{ fontSize: "12px" }}>
            {
                comments.map(e => {
                    return (
                        <li key={e.id}>
                            <Image width='50' height='50' alt={e.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${e.email}.svg`}/>
                            <h2>{e.name}</h2>
                            <h4>{e.body}</h4>
                        </li>
                    )
                })
            }
        </ul>
    )
}