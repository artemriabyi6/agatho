'use client'

import { useEffect, useRef } from 'react'
import styles from './schematiqCard.module.scss'

type Card = {
    id: number,
    title: string,
    text: string
}

type Props = {
    card: Card
    delay?: number
}

const SchematiqCard = ({ card, delay = 0,  }: Props) => {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (cardRef.current) {
            observer.observe(cardRef.current)
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current)
            }
        }
    }, [])

    return (
        <div 
            ref={cardRef} 
            className={styles.card}
            style={{
                '--delay': `${delay}s`
            } as React.CSSProperties}
        >
            <div className={styles.cardNumber}>
                <p className={styles.cardId}>{`0${card.id}`}</p>
            </div>
            <div className={styles.cardText}>
                <h4 className={styles.cardTitle}>{card.title}</h4>
                <p className={styles.cardDescription}>{card.text}</p>
            </div>
        </div>
    )
}

export default SchematiqCard