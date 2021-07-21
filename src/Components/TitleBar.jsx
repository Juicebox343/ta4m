// None of this is actually being used but serves as a monument to authentication working

import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
const TitleBar = () => {
  // const { user, signInWithGoogle, signOut } = useContext(AuthContext);

  // const isLoggedIn = () => {
  //   return (
  //     <div className="nav-login">
  //       <div>{user.displayName} is now rockin!</div>
  //       <button onClick={signOut}>Log Out</button>
  //     </div>
  //   );
  // };

  // const isLoggedOut = () => {
  //   return (
  //     <div className="nav-login">
  //       <div>Log in to get rockin!</div>
  //       <button onClick={signInWithGoogle}>Login</button>
  //     </div>
  //   );
  // };

  return ( 
      <header className='header-top'>
        <div>
          <div className='blue-bar x1'>11</div>
            <h1>There Are Four Mics</h1>
            <div className='blue-bar x3'>28</div>
            <div className='blue-bar x5 hide-me'>61</div>
            <div className='orange-bar x2'>98</div>
            <div className='flavor-text-1 x2'>
              <span>ESTABLISHING SECURE CONNECTION</span>
              <span>SECURE CONNECTION ENABLED</span>
              <span>...Welcome, &#123;GUEST &#125; to Starfleet Archive Museum</span>
              <span>...My name is INDEX, how may I assist you today?</span>
            </div>
            <div className='blue-bar x1'>71</div>
          </div>
        <div className='narrow-bar'>
          <div className='blue-bar x8'></div>
          <div className='orange-bar x2'></div>
          <div className='blue-bar x4'></div> 
        </div>
      </header>
  );
};

export default TitleBar;
