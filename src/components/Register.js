import React, { useState } from "react";
import { Link } from "react-router-dom";
import amazonLogo from "../images/amazon-black.svg";
import { auth } from "../config/firebase";
import { useHistory } from "react-router-dom";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          authUser.user.updateProfile({
            displayName: username,
          });
          if (authUser) {
            history.push("/");
          }
        })
        .catch((err) => alert(err.message));
    } else {
      alert("The Password Does Not Match!");
      setConfirmPassword("");
    }
  };
  return (
    <div className="register">
      <div className="register__container">
        <Link to="/">
          <img className="login__logo" src={amazonLogo} alt="Amazon Logo" />
        </Link>
        <form className="register__form">
          <h1>Create Account</h1>
          <h5>Your Name</h5>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <h5>Email</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <h5>Confirm Password</h5>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="register__btn" type="submit" onClick={register}>
            Register
          </button>
          <hr />
          <p>
            Already Have An Account?
            <Link className="registedwr__signIn" to="/login">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
