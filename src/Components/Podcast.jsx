const Podcast = ({episode}) => {
    return (
        <div>
            <h3>{episode.title}</h3>
            <p>{episode.pubDate}</p>
            <a href={episode.link}>Link that will take you to a 404 page (But Shouldn't).</a>
        </div>
    )
}

export default Podcast;