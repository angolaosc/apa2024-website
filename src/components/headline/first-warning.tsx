import { CalendarBlank } from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.css'

const FirstWarning = () => {
  const { warnings, content, icon } = styles
  return (
    <div className={warnings}>
      <span className={content}>
        De 22 a 24 <br />
        de Março de 2024
      </span>
      <div className={icon}>
        <CalendarBlank size={32} color="#00B0F9" />
      </div>
    </div>
  )
}

export default FirstWarning
