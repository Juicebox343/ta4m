import { useEffect, useState } from 'react';
import Header from './Components/Header';
import Podcast from './Components/Podcast';

// import AuthContextProvider from './Contexts/AuthContext';
// import NavBar from './Components/NavBar';

function App() {
  const [episodes, setEpisodes] = useState([]);

  // Sample and complicated approach on how to get all the episode data
  const fetchEpisodes = () => {
    const ta4mRSS = 'https://therearefourmics.libsyn.com/rss';
    const parser = new DOMParser();
    fetch(ta4mRSS)
      .then((res) => res.text())
      .then((rssFeed) => parser.parseFromString(rssFeed, 'text/xml'))
      .then((data) => {
        const episodes = data.querySelectorAll('item');
        const episodeArray = [];
        episodes.forEach((episode) => {
          const episodeDetails = {
            title: episode.children[0].textContent,
            pubDate: episode.children[2].textContent,
            link: episode.children[8].attributes[2].nodeValue
          };
          episodeArray.push(episodeDetails);
        });
        setEpisodes(episodeArray);
      });
  };

  useEffect(fetchEpisodes, []);

  return (
    <div className="App">
      <Header />
      {episodes && episodes.map((episode) => <Podcast episode={episode} />)}
    </div>
  );
}

export default App;
