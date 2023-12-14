import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../Firebase/Firebase';
import './Login.css'

export function Login() {
    const login = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
      });
    }


  return (
    <div className="butt">
        <button onClick={login}>sign up with google</button>
    </div>
  )
}



