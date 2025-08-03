'use client'

import { useEffect, useRef } from 'react'
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
    const sectionRef = useRef<HTMLElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const videoRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate)
                    }
                })
            },
            { threshold: 0.1 }
        )

        const elements = [
            sectionRef.current,
            titleRef.current,
            buttonRef.current,
            videoRef.current
        ].filter(Boolean)

        elements.forEach(el => {
            if (el) observer.observe(el)
        })

        return () => {
            elements.forEach(el => {
                if (el) observer.unobserve(el)
            })
        }
    }, [])

    return ( 
        <section ref={sectionRef} className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.infoBlock}>
                    <h2 ref={titleRef} className={styles.title}>Schematiq</h2>
                    <button ref={buttonRef} className={styles.button}>Brand Identity</button>
                    <div className={styles.cardsBlock}>
                        {cards.map((card, index) => (
                            <SchematiqCard 
                                key={card.id} 
                                card={card}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
                <div ref={videoRef} className={styles.videoBlock}>
                    <Image 
                        src='/assets/studio.webp' 
                        width={500} 
                        height={500} 
                        alt='tablet'
                    />
                </div>
            </div>
        </section>
    )
}
 
export default Schematiq