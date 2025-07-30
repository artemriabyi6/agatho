import Image from "next/image";
import styles from "./footer.module.scss";
import Btn from "./Btn";

type ButtonType = {  // Змінили назву типу, щоб уникнути конфлікту
  text: string;
};

const buttons: ButtonType[] = [  // Змінили назву масиву для ясності
  {
    text: "Brand Identity ",
  },
  {
    text: "Brand Activation ",
  },
  { text: "Website Development " },
  { text: "Brand strategy" },
  { text: "Video Production" },
  { text: "Integrated Marketing " },
];

const Footer = () => {  // Змінили на PascalCase
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <h3 className={styles.title}>What we do</h3>
        <h5 className={styles.subTitle}>Elevate your brand and make your mark in history.</h5>
        <Image src='/assets/logo.svg' width={70} height={70} alt="logo"/>
        <div className={styles.btnsWrapper}>
          {buttons.map((btn) => (
          <Btn key={btn.text} text={btn.text.trim()} />  // Додано .trim() для зайвих пробілів
        ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
