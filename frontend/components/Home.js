import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Home.module.css"; // Assurez-vous d'importer le fichier CSS correctement

function Home() {
    const user = useSelector((state) => state.user.value);

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img src="logo.png" alt="Logo petit" />
        </div>
        <div className={styles.userInfo}>
          <p>Nom de l'utilisateur connecté</p>
          <p>Pseudo de l'utilisateur</p>
        </div>
      </div>
      <div className={styles.middleSection}>
        <div className={styles.middleTop}>
          <h2>HOME</h2>
        </div>
        <div className={styles.middleContent}>
          Component1
        </div>
        <div className={styles.middleBottom}>
          All Components 2
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.rightTop}>
          <h2>Trends</h2>
        </div>
        <div className={styles.rightContent}>
        All Components 3
        </div>
      </div>
    </div>
  );
};

export default Home;
