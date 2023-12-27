import { MapPin } from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.css'

const SecondWarning = () => {
  const { warnings, second, content, icon } = styles
  return (
    <div className={`${warnings} ${second}`}>
      <span className={content}>
        Online no <br />
        YouTube! Não perca
      </span>
      <div className={icon}>
        <MapPin size={32} color="#00B0F9" />
      </div>
    </div>
  )
}

export default SecondWarning
