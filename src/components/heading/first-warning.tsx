import { CalendarBlank } from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.css'

const FirstWarning = () => {
  const { warnings, content, icon } = styles
  return (
    <div className={warnings}>
      <span className={content}>
        Data do <br />
        evento por anunciar
      </span>
      <div className={icon}>
        <CalendarBlank size={32} color="#00B0F9" />
      </div>
    </div>
  )
}

export default FirstWarning
