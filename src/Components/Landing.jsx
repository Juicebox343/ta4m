import { Link } from "react-router-dom";
import Player from "./Player";

const Header = ({ activeEpisode, isPlaying, playToggle }) => {
  return (
    <>
      <header className="hero">
        <div
          className="banner"
          style={
            isPlaying
              ? { backgroundImage: "url(/ezri.gif)" }
              : { backgroundImage: "url(/4mics-1920.png)" }
          }
        ></div>
        <div className="titles">
          <h1>There Are Four Mics</h1>
          <span className="separator"></span>
          <span>A Star Trek Podcast</span>
        </div>
        <Player
          activeEpisode={activeEpisode}
          playToggle={playToggle}
          isPlaying={isPlaying}
        />
        <div className="read-more">
          <Link to="/home">Enter Site</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
