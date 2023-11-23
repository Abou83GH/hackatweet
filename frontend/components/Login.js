import { useSelector } from "react-redux";
import Head from "next/head";
import { Modal } from "antd";
import styles from "../styles/Login.module.css";

function Login(
    // const [isModalVisible, setIsModalVisible] = useState(false);
) {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.container}>
      <div className={styles.leftsection} >
          <div className={styles.logobig}>
            <img src="logo.png" alt="Logo gros" />
          </div>
        </div>
        <div className={styles.rightsection}>
          <img src="logo.png" alt="Logo petit" />
          <h1>See what's happening</h1>
          <h2>Join Hackatweet today</h2>
          <div className={styles.content}>
            <button className={styles.component}>Sign Up</button>
            <p className={styles.paragraph}>Already have an account?</p>
            <button className={styles.component}>Sign In</button>
          </div>
        </div>
       
      </div>
        {/* <Modal getContainer="#react-modals" className={styles.modal} visible={isModalVisible} closable={false} footer={null}>
					{modalContent}
	    </Modal> */}
    </div>
  );
}
export default Login;
