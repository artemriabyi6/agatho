import styles from './schematiqCard.module.scss'

type Card = {
    id: number,
    title: string,
    text: string
}

type Props = {
    card: Card
}

const SchematiqCard = ({ card }: Props) => {
  return (
    <div key={card.id} className={styles.card}>
      <div className={styles.cardNumber}>
        <p className={styles.cardId}>{`0${card.id}`}</p>
      </div>
      <div className={styles.cardText}>
        <h4 className={styles.cardTitle}>{card.title}</h4>
        <p className={styles.cardText}>{card.text}</p>
      </div>
    </div>
  );
};

export default SchematiqCard;
