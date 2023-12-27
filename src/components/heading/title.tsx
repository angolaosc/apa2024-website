import styles from './styles.module.css'

interface PropsType {
  content: string
}

const Title = ({ content }: PropsType) => {
  const { chevron, title } = styles
  return (
    <h1 className={title}>
      <span className={chevron}>{'< '}</span>
      {content}
      <span className={chevron}>{'>'}</span>
    </h1>
  )
}

export default Title
