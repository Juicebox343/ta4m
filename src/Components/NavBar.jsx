// None of this is actually being used but serves as a monument to authentication working

import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
const NavBar = () => {
  const { user, signInWithGoogle, signOut } = useContext(AuthContext);

  const isLoggedIn = () => {
    return (
      <div className="nav-login">
        <div>{user.displayName} is now rockin!</div>
        <button onClick={signOut}>Log Out</button>
      </div>
    );
  };

  const isLoggedOut = () => {
    return (
      <div className="nav-login">
        <div>Log in to get rockin!</div>
        <button onClick={signInWithGoogle}>Login</button>
      </div>
    );
  };

  return <nav>{user ? isLoggedIn() : isLoggedOut()}</nav>;
};

export default NavBar;
