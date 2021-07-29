import TitleBar from './TitleBar';
import SideBar from './SideBar';
import NavBar from './NavBar';

const About = () => {
  return (
    <>
      <div className='container' id='episodes'>
        <TitleBar />
        <NavBar />
        <SideBar />
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
          <div>
            <h2>Crew Manifest</h2>
            <ul className='crew'>
              <li>
                <h3>Jason</h3>
                <p></p>
              </li>
              <li>
                <h3>Joe</h3>
                <p></p>
              </li>
              <li>
                <h3>Chris</h3>
                <p></p>
              </li>
              <li>
                <h3>Josh</h3>
                <p></p>
              </li>
              <li>
                <h3>Anna</h3>
                <p></p>
              </li>

            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
