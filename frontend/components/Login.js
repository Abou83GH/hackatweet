import { useSelector } from "react-redux";
import { useState } from "react";
import Head from "next/head";
import { Modal, Button } from "antd";
import styles from "../styles/Login.module.css";

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
          <h2>Join hackatweet today</h2>
          <div className={styles.content}>
            <Button className={styles.component} onClick={showSignUpModal}>
              Sign up
            </Button>
            <Modal
              title="Basic Modal"
              open={isSignUpModalOpen}
              onOk={handleSignUpBtn}
              onCancel={handleSUCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
            <p className={styles.paragraph}>Already have an account</p>
            <Button className={styles.component} onClick={showSignInModal}>
              Sign in
            </Button>
            <Modal
              title="Basic Modal"
              open={isSignInModalOpen}
              onOk={handleSignInBtn}
              onCancel={handleSICancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
