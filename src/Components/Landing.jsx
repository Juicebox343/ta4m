import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = ({latestEpisode}) => {
  const podcastPlayer = useRef();
  const [isEzri, setIsEzri] = useState(false);


  const playPodcast = () => {
    isEzri ? podcastPlayer.current.play() : podcastPlayer.current.pause();
  }

  useEffect(playPodcast, [isEzri])

  return (
    <>
      <header className='hero'>
        <div
          className='banner'
          style={
            isEzri
              ? { backgroundImage: 'url(/ezri.gif)' }
              : { backgroundImage: 'url(/4mics-1920.png)' }
          }
        ></div>
        <div className='titles'>
          <h1>There Are Four Mics</h1>
          <span className='separator'></span>
          <span>A Star Trek Podcast</span>
        </div>
        <div>
          <div className='fake-player'>
            <audio src={latestEpisode.link} ref={podcastPlayer} />
            <button
              className='fake-play'
              onClick={() => setIsEzri(!isEzri)}
            ></button>
            <span className='fake-title'>{latestEpisode.title}</span>
          </div>
          <div className='read-more'>
            <Link to='/home'>Enter Site</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
