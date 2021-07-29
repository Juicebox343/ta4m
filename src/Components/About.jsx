const About = () => {
  return (
        <main className='about'>
          <div>
            <h2>About</h2>
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
          </div>
          <div>
            <h3>Active Crew</h3>
            <ul className='crew crew-one'>
              <li>
                <img src='./command.png' alt='red and black colors of the starfleet command division uniforms'/>
                <h4>Jason</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores rerum, quisquam repellendus vero, deserunt quam eligendi incidunt voluptates error, veniam similique corporis laboriosam quae libero aliquid aut aperiam ab?</p>
              </li>
              <li>
                <img src='./operations.png' alt='yellow and black colors of the starfleet operations division uniforms'/>
                <h4>Joe</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores rerum, quisquam repellendus vero, deserunt quam eligendi incidunt voluptates error, veniam similique corporis laboriosam quae libero aliquid aut aperiam ab?</p>
              </li>
              <li>
                <img src='./sciences.png' alt='blue and black colors of the starfleet sciences division uniforms'/>
                <h4>Josh</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores rerum, quisquam repellendus vero, deserunt quam eligendi incidunt voluptates error, veniam similique corporis laboriosam quae libero aliquid aut aperiam ab?</p>
              </li>
              </ul>
              <h3>On Shore Leave</h3>
              <ul className='crew crew-two'>
              <li>
                <img src='./operations.png' alt='yellow and black colors of the starfleet operations division uniforms'/>
                <h4>Chris</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores rerum, quisquam repellendus vero, deserunt quam eligendi incidunt voluptates error, veniam similique corporis laboriosam quae libero aliquid aut aperiam ab?</p>
              </li>
              <li>
                <img src='./operations.png' alt='yellow and black colors of the starfleet operations division uniforms'/>
                <h4>Anna</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores rerum, quisquam repellendus vero, deserunt quam eligendi incidunt voluptates error, veniam similique corporis laboriosam quae libero aliquid aut aperiam ab?</p>
              </li>
            </ul>
          </div>
        </main>
  );
};

export default About;
