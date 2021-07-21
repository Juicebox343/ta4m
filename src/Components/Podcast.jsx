const Podcast = ({ episode }) => {
  return (
    <article className="episode">
      <header>
        <h3>{episode.title}</h3>
      </header>
      <p>
        Podcast Release Date: <time>{episode.pubDate}</time>
      </p>
      <p>Runtime: {episode.length}</p>
      <p>{episode.briefDescription}</p>
      <details>
        <summary>Full Summary</summary>
        <div dangerouslySetInnerHTML={{ __html: episode.fullDescription }} />
      </details>
      <a href={episode.link}>Listen here.</a>
    </article>
  );
};

export default Podcast;
