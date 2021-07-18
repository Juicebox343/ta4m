import React, { createContext } from "react";
import { auth, provider } from "../firebaseConfig.js";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  signInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        this.setState({ user: result.user });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  signOut = () => {
    auth.signOut().then(() => this.setState({ user: null }));
  };
  render() {
    return (
      <AuthContext.Provider
        value={{
          user: this.state.user,
          signInWithGoogle: this.signInWithGoogle,
          signOut: this.signOut,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
