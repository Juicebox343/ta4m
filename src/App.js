import AuthContextProvider from "./Contexts/AuthContext";
import NavBar from './Components/NavBar';
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <NavBar />
        <Header />
      </AuthContextProvider>
    </div>
  );
}

export default App;
