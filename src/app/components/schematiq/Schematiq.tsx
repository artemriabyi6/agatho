import Image from 'next/image'
import styles from './schematiq.module.scss'
import SchematiqCard from './SchematiqCard'

type Card = {
    id: number,
    title: string,
    text: string
}

const cards: Card[] = [
    {
        id: 1,
        title: 'Background',
        text: 'Give a brief overview of your project here. You may talk about the client brand and the main project challenge.'
    },
    {
        id: 2,
        title: 'Solution',
        text: 'Give a brief overview of your project here. You may talk about the client brand and the main project challenge.'
    },

]

const Schematiq = () => {
    return ( 
        <section className={styles.section}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.infoBlock}>
                        <h2 className={styles.title}>Schematiq</h2>
                        <button className={styles.button}>Brand Identity</button>
                        <div className={styles.cardsBlock}>
                            {cards.map(card => (
                              <SchematiqCard key={card.id} card={card}/>
                            ))}
                        </div>
                    </div>
                    <div className={styles.videoBlock}>
                        <Image src='/assets/studio.webp' width={500} height={500} alt='tablet'/>
                    </div>
                </div>
        </section>
     );
}
 
export default Schematiq;