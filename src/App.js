import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './Components/About';
import Articles from './Components/Articles';
import Landing from './Components/Landing';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import NotFound from './Components/NotFound';
import SideBar from './Components/SideBar';
import TitleBar from './Components/TitleBar';

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
            length: episode.children[9].textContent,
            image: episode.children[6].textContent.slice((episode.children[6].textContent.indexOf('src= \"') + 6), (episode.children[6].textContent.includes('.jpg') ? (episode.children[6].textContent.indexOf('.jpg') +4) : episode.children[6].textContent.includes('.png') ? (episode.children[6].textContent.indexOf('.png') +4) : (episode.children[6].textContent.indexOf('.gif') +4)))
          };
          console.log(episode)
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
          <Route path='/'>
            <div className='container'>
              <TitleBar />
              <NavBar />
              <SideBar />
              <Switch>
                <Route exact path='/articles'>
                  <Articles />
                </Route>
                <Route exact path='/home'>
                  <Main episodes={episodes} />
                </Route>
                <Route exact path='/about'>
                  <About />
                </Route>
                <Route exact path='/podcasts'>
                  <Main episodes={episodes} />
                </Route>
                <Route
                  path='/posts/:id'
                  render={({ match }) => {
                    return (
                      <Main
                        episodes={episodes.filter(
                          (episode) => episode.key === match.params.id
                        )}
                      />
                    );
                  }}
                ></Route>
                <Route component={NotFound} />
              </Switch>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
