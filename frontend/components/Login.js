import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Modal, Button } from "antd";
import styles from "../styles/Login.module.css";
import 'antd/dist/reset.css';
import Signin from "./Signin";
import Signup from "./Signup";
import { useRouter } from 'next/router';
import { logout } from "../reducers/user";


function Login() {
  // let user = useSelector((state) => state.user.value);
  const user = {token: null}
  const dispatch = useDispatch();
  const router = useRouter();

  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);


  const showSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const showSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const handleSUCancel = () => {
    setIsSignUpModalOpen(false);
  };

  const handleSICancel = () => {
    setIsSignInModalOpen(false);
  };

  if (user.token) {
    router.push('/home');
  }
  
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
            <Modal
              title="Basic Modal"
              open={isSignUpModalOpen}
              onCancel={handleSUCancel}
              className={styles.modalSignUp}
            >
              <Signup />
            </Modal>
            <p className={styles.paragraph}>Already have an account</p>
            <Button className={styles.signInBtn} onClick={showSignInModal}>
              Sign in
            </Button>
            <Modal
              open={isSignInModalOpen}
              onCancel={handleSICancel}
            >
              <Signin />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
