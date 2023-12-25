import { type ReactNode } from 'react'

import { poppins } from '@/app/fonts'

import styles from './styles.module.css'

interface PropsType {
  Icon: ReactNode
  content: string
}

export const AboutEvent = ({ Icon, content }: PropsType) => {
  return (
    <div className={styles.about_event}>
      {Icon}
      <span className={`${poppins.className} ${styles.span}`}>{content}</span>
    </div>
  )
}
