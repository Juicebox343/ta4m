import { Link, useParams } from 'react-router-dom';

const Podcast = ({ episode }) => {

  const regExpression = /Canon Date: (.*) </;

  // Determines if individual post page is loaded or if it's the main list
  let isDedicatedPage;
  const { id } = useParams();
  id ? (isDedicatedPage = true) : (isDedicatedPage = false);

  if (episode) {
    return (
      <>
        <article className='post'>
          <span className='stardate'>
            {episode.fullDescription.length > 0 &&
              regExpression.exec(episode.fullDescription) &&
              regExpression
                .exec(episode.fullDescription)[1]
                .replace(/(<([^>]+)>)/gi, '')}
          </span>
          <div className='post-wrapper'>

            <div className='post-container'>
              <div className='post-details'>
                {/* If on individual podcast page, does not display link in the header */}
                {isDedicatedPage ? (
                  <h3>{episode.title}</h3>
                ) : (
                  <Link to={`/posts/${episode.key}`}>
                    <h3>{episode.title}</h3>
                  </Link>
                )}
                {/* <p>
            Podcast Release Date: <time>{episode.pubDate}</time>
          </p>
          <p>Runtime: {episode.length}</p> */}
                <p className='post-brief'>{episode.briefDescription}</p>
                <details>
                  <summary>Full Summary</summary>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: episode.fullDescription
                    }}
                  />
                </details>
                <a href={episode.link}>Listen here.</a>
                {/* Displays home button if on dedicated podcast page */}
                {isDedicatedPage ? (
                  <div>
                    <Link to='/home'>
                      <button>Back to Main</button>
                    </Link>
                  </div>
                ) : null}
              </div>

              <div className='post-image'>
                <img src='/carpenter-street.jpg' alt={episode.title} />
              </div>
            </div>

          </div>
        </article>
      </>
    );
  } else {
    return null;
  }
};

export default Podcast;
