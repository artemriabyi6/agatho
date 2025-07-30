import styles from './cards.module.scss'

type Card = {
    src: string
}

const cards: Card[] = [
    {
        src: 'https://res.cloudinary.com/daqtqvg3i/video/upload/v1753813646/card2_v294vk.mp4'
    },
    {
        src: 'https://res.cloudinary.com/daqtqvg3i/video/upload/v1753813642/card1_ghbpp8.mp4'
    },
    {
        src: 'https://res.cloudinary.com/daqtqvg3i/video/upload/v1753813641/card3_j1hw3a.mp4'
    }
] 

const Cards = () => {
    return ( 
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
               {cards.map(card => (
                <div className={styles.card} key={card.src}>
                    <video src={card.src} autoPlay muted loop controls></video>
                </div>
               ))}
            </div>
        </section>
     );
}
 
export default Cards;