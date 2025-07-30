import styles from './footer.module.scss'



type Props = {
    text: string
}

const Btn = ({text}: Props) => {
    return ( 
        <button className={styles.button}>{text}</button>
     );
}
 
export default Btn;