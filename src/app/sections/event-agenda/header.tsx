import { poppins } from '@/app/fonts'
import { CalendarBlank } from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.focus}>
        <h2 className={`${poppins.className} ${styles.special__title}`}>Agenda do Evento</h2>
        <p className={`${poppins.className} ${styles.paragraph}`}>
          Explore nossa agenda repleta de Actividades{' '}
        </p>
      </div>
      <div className={styles.calendar__area}>
        <span className={`${poppins.className} ${styles.span}`}>
          Data do <br />
          evento por anunciar
        </span>
        <div className={styles.calendar}>
          <CalendarBlank size={32} color="#fff" />
        </div>
      </div>
    </header>
  )
}

export default Header
