import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { login } from "../reducers/user";
import { Modal } from "antd";
import styles from "../styles/Login.module.css";

function Signin() {
  const dispatch = useDispatch();

  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: signInUsername, token: data.token }));
          setSignInUsername("");
          setSignInPassword("");
        }
      });
  };

  return (
    <div>
      <input
        placeholder="username"
        id="signInUsername"
        onChange={(e) => setSignInUsername(e.target.value)}
        value={signInUsername}
      ></input>
      <input
        placeholder="password"
        id="signInPassword"
        onChange={(e) => setSignInPassword(e.target.value)}
        value={signInPassword}
      ></input>
      <button
        className={styles.signInButton}
        onClick={() => handleConnection()}
      >
        Sign in
      </button>
    </div>
  );
}
export default Signin;
