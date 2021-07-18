import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const Header = () => {
  const { user, signInWithGoogle, signOut } = useContext(AuthContext);
  return (
    <>
      <header className="intro">
        <h1>Hello there.</h1>
        <img src="./obi.jpg" alt="my boy obi-wan" />
        {user ? (
          <button onClick={signOut}>Log Out</button>
        ) : (
          <button onClick={signInWithGoogle}>Login</button>
        )}
      </header>
    </>
  );
};

export default Header;
