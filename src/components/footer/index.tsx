import { About } from './about'
import { Focus } from './focus'
import styles from './style.module.css'

interface PropsType {
  id: string
}

export const Footer = ({ id }: PropsType) => {
  return (
    <footer className={styles.footer} id={id}>
      <div className={styles.container__area}>
        <Focus />
        <About />
      </div>
    </footer>
  )
}
