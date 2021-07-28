import { Switch, Route } from 'react-router-dom';
import TitleBar from './TitleBar';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Main from './Main';
import About from './About';

const Home = ({ episodes }) => {
  return (
    <>
      <div className='container' id='episodes'>
        <TitleBar />
        <NavBar />
        <SideBar />
        <Switch>
          <Route path='/home'>
            <Main episodes={episodes} />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/podcasts'>
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
        </Switch>
      </div>
    </>
  );
};

export default Home;
