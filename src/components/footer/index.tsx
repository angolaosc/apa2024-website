import { About } from './about'
import { Focus } from './focus'
import styles from './style.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container__area}>
        <Focus />
        <About />
      </div>
    </footer>
  )
}
