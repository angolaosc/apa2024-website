/* eslint-disable @typescript-eslint/naming-convention */
import { CalendarBlank } from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.css'

const Header = () => {
  const { header, focus, special__title, paragraph, calendar__area, span, calendar } = styles

  return (
    <header className={header}>
      <div className={focus}>
        <h2 className={special__title}>Agenda do Evento</h2>
        <p className={paragraph}>Explore nossa agenda repleta de Actividades </p>
      </div>
      <div className={calendar__area}>
        <span className={span}>
          Data do <br />
          evento por anunciar
        </span>
        <div className={calendar}>
          <CalendarBlank size={32} color="#fff" />
        </div>
      </div>
    </header>
  )
}

export default Header
