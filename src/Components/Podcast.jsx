const Podcast = ({ episode }) => {
  return (
    <article className="post">
      <div className='post-left'>
        <div></div><div></div><div></div><div></div><div></div>
      </div>
      <div className='post-container'>
        
        <div className='post-details'>
          <header>
            <h3>{episode.title}</h3>
          </header>
          <p>
            Podcast Release Date: <time>{episode.pubDate}</time>
          </p>
          <p>Runtime: {episode.length}</p>
          <p className='post-brief'>{episode.briefDescription}</p>
          <details>
            <summary>Full Summary</summary>
            <div dangerouslySetInnerHTML={{ __html: episode.fullDescription }} />
          </details>
          <a href={episode.link}>Listen here.</a>
        </div>
        
        <div className='post-image'>
          <img src='/post-standin.webp' alt={episode.title}/>
        </div>
      
      </div>
      <div className='post-right'>
        <div></div><div></div><div></div><div></div><div></div>
      </div>
    </article>
  );
};

export default Podcast;
