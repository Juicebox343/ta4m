const Podcast = ({episode}) => {
    return (
        <div>
            <h3>{episode.title}</h3>
            <p>{episode.pubDate}</p>
            <a href={episode.link}>Link.</a>
        </div>
    )
}

export default Podcast;