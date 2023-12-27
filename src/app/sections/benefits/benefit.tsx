import { type PropsType } from './data'
import styles from './styles.module.css'

export const Benefit = ({ title, Icon, paragraph }: PropsType) => {
  const { benefit, content } = styles

  return (
    <div className={benefit}>
      <Icon size={32} color="#fff" />
      <div className={content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
      </div>
    </div>
  )
}
