import { useSelector } from "react-redux";
import { useState } from "react";
import Head from "next/head";
import { Modal, Button } from "antd";
import styles from "../styles/Login.module.css";
import 'antd/dist/reset.css';
import Signin from "./Signin";
import Signup from "./Signup";


function Login() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const showSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const showSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const handleSignUpBtn = () => {
    setIsSignUpModalOpen(false);
  };

  const handleSignInBtn = () => {
    setIsSignInModalOpen(false);
  };

  const handleSUCancel = () => {
    setIsSignUpModalOpen(false);
  };

  const handleSICancel = () => {
    setIsSignInModalOpen(false);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.container}>
        <div className={styles.leftsection}>
          <div className={styles.logobig}>
            <img src="logo.png" alt="Logo gros" />
          </div>
        </div>
        <div className={styles.rightsection}>
          <img src="logo.png" alt="Logo petit" />
          <h1>See what's happening</h1>
          <h2>Join hackatweet today.</h2>
          <div className={styles.content}>
            <Button className={styles.signUpBtn} onClick={showSignUpModal}>
              Sign up
            </Button>
            
            <p className={styles.paragraph}>Already have an account</p>
            <Button className={styles.signInBtn} onClick={showSignInModal}>
              Sign in
            </Button>
            <Modal
              open={isSignInModalOpen}
              onOk={handleSignInBtn}
              onCancel={handleSICancel}
            >
              
              <div className={styles.signinContent}>
              <img src="logo.png" alt="Logo petit" style={{ width: '10%', height: '10%', rotate:("180deg")}}/>
              <span className={styles.modalSlogan}>Connect to Hackatweet</span>
              <div className={styles.signinInput}>
              <input className ={styles.input} placeholder="username"></input>
              <input className ={styles.input} placeholder="password"></input>
              </div>
              </div>

              <Signin />
            </Modal>
          </div>
        </div>
      </div>
      <Modal
              open={isSignUpModalOpen}
              onOk={handleSignUpBtn}
              onCancel={handleSUCancel}
              className="modalSignUp"
             
            >
              <div className={styles.signupContent}>
              <img src="logo.png" alt="Logo petit" style={{ width: '10%', height: '10%', rotate:("180deg")}}/>
              <span className={styles.modalSlogan}>Create your hackatweet account</span>
              <div className={styles.signupInput}>
              <input className ={styles.input} placeholder="firstname"></input>
              <input className ={styles.input} placeholder="username"></input>
              <input className ={styles.input} placeholder="password"></input>
              </div>
              </div>

              <Signup />
            </Modal>
    </div>
  );
}
export default Login;
