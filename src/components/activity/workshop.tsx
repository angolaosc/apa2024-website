import styles from './style.module.css'

interface PropsType {
  title: string
  specialGuest: string
}

const Workshop = ({ title, specialGuest }: PropsType) => {
  return (
    <div className={`${styles.workshop}`}>
      <div>
        <h4 className={styles.special__title}>Workshop: {`"${title}"`}</h4>
      </div>
      <div>
        <h4 className={styles.subtitle}>
          Convidado Especial: <span className={styles.span}>{specialGuest}</span>
        </h4>
      </div>
    </div>
  )
}

export default Workshop
