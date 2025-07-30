import Image from "next/image";
import styles from './heroSection.module.scss'

interface Banner {
    id: number
    src: string
}

const Banners: Banner[] = [
    {
        id: 1,
        src: '/assets/baner1.webp'
    },
    {
        id: 2,
        src: '/assets/baner2.webp'
    },
    {
        id: 3,
        src: '/assets/baner3.webp'
    },
    {
        id: 4,
        src: '/assets/baner4.webp'
    }
]

const HeroSection = () => {
    return ( 
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                {Banners.map(banner => (
                    <div key={banner.id} className={styles.imgWrapper}>
                        <Image src={banner.src} width={320} height={400} alt="banner" />
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default HeroSection;