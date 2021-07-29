import TitleBar from './TitleBar';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Podcast from './Podcast';

const Main = ({ episodes }) => {
  return (
    <>
      <div className='container' id='episodes'>
        <TitleBar />
        <NavBar />
        <SideBar />
        <main className='post-index'>
        <h2>Episodes</h2>
      
          <div>
            {episodes &&
              episodes.map((episode) => (
                <Podcast episode={episode} key={episode.key} />
              ))}
          </div>
     
        </main>
      </div>
    </>
  );
};

export default Main;



{/* <div className='post-right'>
<div></div>
<div></div>
<div></div>
<div></div>
</div>

<div className='post-left'>
<div></div>
<div></div>
<div></div>
<div></div>
</div> */}