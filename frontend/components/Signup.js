import { useState, useEffect } from "react";
import Head from "next/head";
import { Modal } from "antd";
import styles from "../styles/Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/user";

function Signup() {
  const dispatch = useDispatch();
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpFirstname, setSignupFirstname] = useState("");

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: signUpFirstname,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              firstname: signUpFirstname,
              username: signUpUsername,
              token: data.token,
            })
          );
          setSignUpUsername("");
          setSignUpPassword("");
          setSignupFirstname("");
        }
      });
  };

  return (
    <div>
      <input placeholder="firstname" id="signUpFirstname" onChange={(e) => setSignupFirstname(e.target.value)} value={signUpFirstname} ></input>
      <input placeholder="username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} ></input>
      <input placeholder="password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}></input>
      <button className={styles.signUpButton} onClick={() => handleRegister()}>
        Sign up
      </button>
    </div>
  );
}
export default Signup;
