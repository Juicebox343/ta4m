import AuthContextProvider from "./Contexts/AuthContext";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
      </AuthContextProvider>
    </div>
  );
}

export default App;
