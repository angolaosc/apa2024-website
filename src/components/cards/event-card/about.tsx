/* eslint-disable @typescript-eslint/naming-convention */
import { type ReactNode } from 'react'

import styles from './styles.module.css'

interface PropsType {
  Icon: ReactNode
  content: string
}

export const AboutEvent = ({ Icon, content }: PropsType) => {
  const { about_event, span } = styles

  return (
    <div className={about_event}>
      {Icon}
      <span className={span}>{content}</span>
    </div>
  )
}
