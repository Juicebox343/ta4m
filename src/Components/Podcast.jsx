import { Link } from "react-router-dom";
const Podcast = ({ episode }) => {
 
  if (episode) {
    return (
      <article className="episode">
        <header>
          <Link to={`/posts/${episode.key}`}>
            <h3>{episode.title}</h3>
          </Link>
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
  } else {
    return null;
  }
};

export default Podcast;
