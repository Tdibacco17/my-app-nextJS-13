export default function PostsLayout({ children }) {

    return (
        <div>
            <marquee style={{ background: "white", color: "purple" }}>El mejor canal de twitch de programacion</marquee>
            {children}
        </div>
    )
}