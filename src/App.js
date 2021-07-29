import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import About from './Components/About';
import Home from './Components/Home';
import Articles from './Components/Articles';

function App() {
  const [episodes, setEpisodes] = useState([]);

  // Sample and possibly unnecessarily complicated approach on how to get all the episode data
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
            key: episode.children[3].textContent,
            briefDescription: episode.children[13].textContent,
            fullDescription: episode.children[6].textContent,
            link: episode.children[8].attributes[2].nodeValue,
            length: episode.children[9].textContent
          };
          episodeArray.push(episodeDetails);
        });
        setEpisodes(episodeArray);
      });
  };


  useEffect(fetchEpisodes, []);

  return (
    <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Landing latestEpisode={episodes.length > 1 && episodes[0]} />
            </Route>
            <Route exact path='/home'>
              {/* Temporarily only passing in podcast episodes because that's all we have at the moment */}
              <Home episodes={episodes}/>
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/podcasts'>
              <Home episodes={episodes}/>
            </Route>
            <Route path='/articles'>
              <Articles/>
            </Route>
            <Route
              // Filters episode array to find podcast with ID matching the URL
              path='/posts/:id'
              render={({ match }) => {
                return (
                  <Home
                    episodes={episodes.filter(
                      (episode) => episode.key === match.params.id
                    )}
                  />
                );
              }}
            ></Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
