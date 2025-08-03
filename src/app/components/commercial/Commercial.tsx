'use client'

import { useEffect, useRef } from 'react'
import styles from "./commercial.module.scss"
import SchematiqCard from "../schematiq/SchematiqCard"

type Card = {
  id: number
  title: string
  text: string
}

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
]

const Commercial = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const firstVideoRef = useRef<HTMLDivElement>(null)
  const secondVideoRef = useRef<HTMLDivElement>(null)
  const cardWrapperRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate)
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const elements = [
      sectionRef.current,
      titleRef.current,
      buttonRef.current,
      firstVideoRef.current,
      secondVideoRef.current,
      ...cardWrapperRefs.current
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
        <div className={styles.sectionWrapper}>
          <div className={styles.infoBlock}>
            <h2 ref={titleRef} className={styles.title}>
              Iconography <br />
              Commercial Co.
            </h2>
            <button ref={buttonRef} className={styles.button}>Video Production</button>
            <div className={styles.cardsBlock}>
              {cards.map((card, index) => (
                <div 
                  key={card.id}
                  ref={(el) => (cardWrapperRefs.current[index] = el)}
                  className={styles.cardWrapper}
                >
                  <SchematiqCard 
                    card={card}
                    delay={index * 0.1}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.videoBlock}>
            <div ref={firstVideoRef} className={styles.firstVideoBlock}>
              <video
                className={styles.firstVideo}
                src="https://res.cloudinary.com/daqtqvg3i/video/upload/v1753813646/card2_v294vk.mp4"
                muted
                loop
                autoPlay
                playsInline
              ></video>
            </div>
            <div ref={secondVideoRef} className={styles.secondVideoBlock}>
              <video
                className={styles.secondVideo}
                src="https://res.cloudinary.com/daqtqvg3i/video/upload/v1753813646/card2_v294vk.mp4"
                muted
                loop
                autoPlay
                playsInline
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Commercial