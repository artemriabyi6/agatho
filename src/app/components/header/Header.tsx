import styles from "./header.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logoBlock}>
          <Image src="assets/logo.svg" width={50} height={50} alt="logo" />
          <p className={styles.logoText}>
            Studio <span>Agatho</span>
          </p>
        </div>
        <div className={styles.titleBlock}>
          <h2>Design <br /> the future</h2>
          <Image src='assets/arrow.svg' width={70} height={70} alt="arrow"/>
        </div>
        <div className={styles.buttonBlock}>
            <button className={styles.button}>Work with us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
