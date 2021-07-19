import { auth, db } from './firebaseConfig';

function App() {
  return (
    <div className="App">
      
      <header className="hero">
        <div className='banner'>
          <img src="./ta4m-hero.png" alt='four microphones hanging menacingly in homage to TNG four lights scene'/>
        </div>
        <div className='titles'>        
          <h1>There Are Four Mics</h1>
          <span className='seperator'></span>
          <span>A Star Trek Podcast</span>
        </div>
      </header>

      <div className="intro">
        <h1>Hello there.</h1>
        <img src="./obi.jpg" alt="my boy obi-wan"/>
      </div>
    </div>
  );
}

export default App;
