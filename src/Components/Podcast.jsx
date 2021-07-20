const Podcast = ({episode}) => {
    return (
        <div className='episode'>
            <h3>{episode.title}</h3>
            <p>{episode.pubDate}</p>
            <a href={episode.link}>Link.</a>
        </div>
    )
}

export default Podcast;