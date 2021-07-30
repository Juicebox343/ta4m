import { useEffect, useRef } from "react";
const Player = ({ activeEpisode, isPlaying, playToggle }) => {
  const podcastPlayer = useRef();
  const playPodcast = () => {
    if (activeEpisode) {
      isPlaying ? podcastPlayer.current.play() : podcastPlayer.current.pause();
    }
  };

  useEffect(playPodcast, [isPlaying, activeEpisode]);

  return (
    <div>
      <div className="fake-player">
        {activeEpisode ? (
          <audio src={activeEpisode.link} ref={podcastPlayer} />
        ) : null}
        <button className="fake-play" onClick={playToggle}></button>
        <span className="fake-title">{activeEpisode.title}</span>
      </div>
    </div>
  );
};

export default Player;
