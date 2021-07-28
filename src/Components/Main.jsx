import Podcast from './Podcast'

const Main = ({episodes}) => {
    return (
    <main className='post-index'>
          <div className='index-left'></div>
          <div>
            {episodes &&
              episodes.map((episode) => (
                <Podcast episode={episode} key={episode.key} />
              ))}
          </div>
          <div className='index-right'></div>
        </main>
)

}

export default Main;