import { type ReactNode } from 'react'

import styles from './style.module.css'

interface PropsType {
  Icon: ReactNode
  inProgress: string
}

export const Icon = ({ Icon, inProgress }: PropsType) => {
  return (
    <div className={`${inProgress === 'inProgress' ? styles.Icon__flex : styles.Icon__hidden}`}>
      {inProgress === 'inProgress' && Icon}
    </div>
  )
}
