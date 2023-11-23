import { useSelector } from "react-redux";
import Head from "next/head";
import { Modal } from "antd";
import styles from "../styles/Login.module.css";

function Login() {
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
          <h1>Titre Principal</h1>
          <h2>Sous-titre</h2>
          <div className={styles.content}>
            <div className={styles.component}>-- Votre composant ici --</div>
            <p className={styles.paragraph}>Votre paragraphe ici.</p>
            <div className={styles.component}>-- Autre composant ici --</div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
export default Login;
