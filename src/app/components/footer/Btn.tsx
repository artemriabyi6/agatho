import styles from './footer.module.scss'

const Btn = ({ text }: { text: string }) => {
  return (
    <button className={styles.button}>
      {text}
    </button>
  )
}

export default Btn