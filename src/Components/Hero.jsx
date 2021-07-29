import React, { useState } from 'react';

const Hero = (props) => {

  const [isEzri, setIsEzri] = useState(false);


  return (
    <>
      <header className="hero">
        <div className="banner" style={isEzri ? {backgroundImage: 'url(/ezri.gif)'} : { backgroundImage: 'url(/4mics-1920.png)' }}>

        </div>
        <div className="titles">
          <h1>There Are Four Mics</h1>
          <span className="separator"></span>
          <span>A Star Trek Podcast</span>
        </div>
        <div>
          <div className="fake-player">
            <button className="fake-play" onClick={() => setIsEzri(!isEzri)}></button>
            <span className="fake-title">{props.latestEpisode.title}</span>
          </div>
          <div className='read-more'>
            <a href='/#episodes'>Listen</a>
          </div>
        </div>
       
      </header>
    </>
  );
};

export default Hero;
