import AuthContextProvider from './Contexts/AuthContext';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import SidePiece from './Components/SidePiece';
import MainContent from './Components/MainContent';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <main>
          <NavBar />
          <SidePiece />
          <MainContent />
        </main>
        
       
      </AuthContextProvider>
    </div>
  );
}

export default App;
