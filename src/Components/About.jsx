import TitleBar from './TitleBar';
import Sidebar from './Sidebar';
import NavBar from './NavBar';

const About = () => {
  return (
    <>
      <div className='container' id='episodes'>
        <TitleBar />
        <NavBar />
        <Sidebar />
        <main>
          <p>
            There Are Four Mics is a weekly podcast dedicated to group
            discussion of Star Trek. Join your hosts as they make their way
            through the Star Trek franchise episode by episode, movie by movie,
            in stardate order. Grab a beer and join us as we talk about the
            episodes we love and the occasional episode we love to hate.
          </p>
          <p>Leave us a rating and review on iTunes!</p>
          <p>
            Check out our newest show, Disco Night - A Star Trek Discovery
            Podcast.
          </p>
        </main>
      </div>
    </>
  );
};

export default About;
