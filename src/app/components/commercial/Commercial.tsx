import styles from "./commercial.module.scss";
import SchematiqCard from "../schematiq/SchematiqCard";

type Card = {
  id: number;
  title: string;
  text: string;
};

const cards: Card[] = [
  {
    id: 1,
    title: "Background",
    text: "Give a brief overview of your project here. You may talk about the client brand and the main project challenge.",
  },
  {
    id: 2,
    title: "Solution",
    text: "Give a brief overview of your project here. You may talk about the client brand and the main project challenge.",
  },
];

const Commercial = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.sectionWrapper}>
          <div className={styles.infoBlock}>
            <h2 className={styles.title}>
              Iconography <br />
              Commercial Co.
            </h2>
            <button className={styles.button}>Video Production</button>
            <div className={styles.cardsBlock}>
              {cards.map((card) => (
                <SchematiqCard key={card.id} card={card} />
              ))}
            </div>
          </div>
          <div className={styles.videoBlock}>
            <div className={styles.firstVideoBlock}>
              <video
                className={styles.firstVideo}
                src="https://res.cloudinary.com/daqtqvg3i/video/upload/v1753813646/card2_v294vk.mp4"
                muted
                loop
                autoPlay
              ></video>
            </div>
            <div className={styles.secondVideoBlock}>
              <video
                className={styles.secondVideo}
                src="https://res.cloudinary.com/daqtqvg3i/video/upload/v1753813646/card2_v294vk.mp4"
                muted
                loop
                autoPlay
              ></video>
            </div>
          </div>
        </div>
        {/* <div className={styles.bigVideoBlock}>
          <video
            className={styles.bigVideo}
            src="https://res.cloudinary.com/daqtqvg3i/video/upload/v1753813646/card2_v294vk.mp4"
            muted
            loop
            autoPlay
          ></video>
        </div> */}
      </div>
    </section>
  );
};

export default Commercial;
