'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './about.module.scss'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.infoBlock}>
          <h2 className={styles.infoTitle}>
            About <br /> Studio Agatho
          </h2>
          <Image 
            src="/assets/logo.svg" 
            width={50} 
            height={50} 
            alt="logo"
          />
          <p className={styles.infoText}>
            Since its founding in the 80s, Studio Agatho has been the go-to
            company for various design needs. Its offerings range from graphic
            design and branding strategy to website development and video
            production.
          </p>
        </div>
        <div className={styles.imgBlock}>
          <Image
            src="/assets/studio.webp"
            width={400}
            height={400}
            alt="studio"
          />
          <p className={styles.imgText}>
            Agatho boasts a global client base and various industry awards. It
            has set the standard for design studios as its clients collaborate
            with the highest caliber of creatives, engineers, and ambassadors.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About