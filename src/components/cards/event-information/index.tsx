import styles from './styles.module.css'

interface PropsType {
  title: string
  paragraph: string
}

export const EventInformation = ({ paragraph, title }: PropsType) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  )
}
