import styles from './styles.module.css'

interface PropsType {
  content: string
  onClick: () => void
  type: any
}

export const Button = ({ content, onClick, type }: PropsType) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {content}
    </button>
  )
}
