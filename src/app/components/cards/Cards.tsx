'use client'

import { useEffect, useRef } from 'react'
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
    const sectionRef = useRef<HTMLElement>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { 
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card)
        })

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
            cardRefs.current.forEach((card) => {
                if (card) observer.unobserve(card)
            })
        }
    }, [])

    return ( 
        <section ref={sectionRef} className={styles.section}>
            <div className={`container ${styles.container}`}>
               {cards.map((card, index) => (
                <div 
                    ref={(el) => {
                        if (el) {
                            cardRefs.current[index] = el
                        }
                    }}
                    className={styles.card} 
                    key={card.src}
                    style={{ '--delay': `${(index + 1) * 0.2}s` } as React.CSSProperties}
                >
                    <video src={card.src} autoPlay muted loop playsInline></video>
                </div>
               ))}
            </div>
        </section>
    )
}
 
export default Cards