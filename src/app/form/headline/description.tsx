import styles from './styles.module.css'

interface PropsType {
  content: string
}

const Description = ({ content }: PropsType) => {
  const { description } = styles
  return <p className={description}>{content}</p>
}

export default Description
