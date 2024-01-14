import { CalendarBlank } from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.css'
import { i18n } from '@/translate/i18n'

const FirstWarning = () => {
  const { warnings, content, icon } = styles
  return (
    <div className={warnings}>
      <span className={content}>
        {i18n.t('section_1.date.line_1')} <br />
        {i18n.t('section_1.date.line_2')}
      </span>
      <div className={icon}>
        <CalendarBlank size={32} color="#00B0F9" />
      </div>
    </div>
  )
}

export default FirstWarning
