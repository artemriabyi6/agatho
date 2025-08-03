'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './mediaGrid.module.scss';

type Item = {
  type: string,
  src: string,
  width: number,
  height: number
}

const mediaItems: Item[] = [
  { type: 'video', src: 'https://res.cloudinary.com/daqtqvg3i/video/upload/v1753902281/Untitled_design_sbl3df.mp4', width: 1, height: 2 },
  { type: 'image', src: '/assets/baner3.webp', width: 1, height: 1 },
  { type: 'video', src: 'https://res.cloudinary.com/daqtqvg3i/video/upload/v1753901593/grid3_y0ko1w.mp4', width: 2, height: 1 },
  { type: 'image', src: '/assets/baner2.webp', width: 1, height: 1 },
  { type: 'image', src: '/assets/baner3.webp', width: 1, height: 1 },
  { type: 'video', src: 'https://res.cloudinary.com/daqtqvg3i/video/upload/v1753901582/grid2_unol49.mp4', width: 1, height: 2 },
  { type: 'image', src: '/assets/baner2.webp', width: 2, height: 1 },
  { type: 'image', src: '/assets/baner3.webp', width: 1, height: 1 },
  { type: 'video', src: 'https://res.cloudinary.com/daqtqvg3i/video/upload/v1753901962/Black_Pink_Fashion_Modern_Outfit_Style_Photo_Collage_Instagram_Reel_gburak.mp4', width: 1, height: 2 },
  { type: 'image', src: '/assets/baner2.webp', width: 1, height: 1 },
  { type: 'image', src: '/assets/baner3.webp', width: 2, height: 1 },
  { type: 'image', src: '/assets/baner4.webp', width: 1, height: 1 },
];

type VideoProps = {
  src: string
}

const VideoPlayer = ({ src }: VideoProps) => {
  return (
    <video 
      muted
      autoPlay
      loop
      playsInline
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const Gallery = () => {
  const galleryRef = useRef<HTMLElement>(null);
  const gridItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Виправлений ref-колбек без зміни UI
  const setItemRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    gridItemsRef.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    gridItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={galleryRef} className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.infoBlock}>
          <h2 className={styles.title}>Our Work</h2>
          <Image src='assets/arrow.svg' width={70} height={70} alt="arrow"/>
        </div>
        <div className={styles.grid}>
          {mediaItems.map((item, index) => (
            <div 
              ref={setItemRef(index)}
              className={styles.imageWrapper} 
              key={index}
              style={{
                gridColumn: `span ${item.width}`,
                gridRow: `span ${item.height}`
              }}
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={`gallery-${index}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <VideoPlayer src={item.src} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;