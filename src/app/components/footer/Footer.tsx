'use client'

import { useEffect, useRef } from 'react'
import Image from "next/image"
import styles from "./footer.module.scss"
import Btn from "./Btn"

const buttons = [
  "Brand Identity",
  "Brand Activation", 
  "Website Development",
  "Brand strategy",
  "Video Production",
  "Integrated Marketing"
]

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.title}>What we do</h3>
        <h5 className={styles.subTitle}>
          Elevate your brand and make your mark in history.
        </h5>
        <Image 
          src='/assets/logo.svg' 
          width={70} 
          height={70} 
          alt="logo"
          className={styles.logo}
        />
        <div className={styles.buttons}>
          {buttons.map((text) => (
            <Btn key={text} text={text}  />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer