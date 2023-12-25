import { type ReactNode } from 'react'

import styles from './styles.module.css'

interface PropsType {
  Icon: ReactNode
  content: string
}

export const AboutEvent = ({ Icon, content }: PropsType) => {
  return (
    <div className={styles.about_event}>
      {Icon}
      <span className={styles.span}>{content}</span>
    </div>
  )
}
