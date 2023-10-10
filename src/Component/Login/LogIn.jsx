import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import "./LogIn.scss";
import {auth} from '../Firebase'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCreadential) => {
          if(userCreadential) navigate('/')
        })
      .catch((error) => alert(error.message));
    }

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCreadential) => {
          if(userCreadential) navigate('/')
        })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
      })
    }
  return (
    <>
      <Link to="/">
        <img
          className="logo"
          src="	https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="logIn_Container">
        <div>
          <h1>Sign-In</h1>

          <form>
            <h5>E-mail</h5>
            <input
              className="login_input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              className="login_input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
            <button type="Submit" onClick={signIn} className="login_button">
              Sign-In
            </button>
          </form>

          <p className="login_description">
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          <button onClick={register} className="register_button">
            Create Your Amazon Account
          </button>
        </div>
      </div>
    </>
  );
};

export default LogIn;
