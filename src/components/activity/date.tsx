import styles from './style.module.css'

interface PropsType {
  date: string
}

const Date = ({ date }: PropsType) => {
  return (
    <div className={styles.date__area}>
      <span className={styles.date}>{date}</span>
    </div>
  )
}

export default Date
