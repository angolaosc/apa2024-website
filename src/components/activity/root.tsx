import { type ReactNode } from 'react'

import styles from './style.module.css'

interface PropsType {
  children: ReactNode
  inProgress: string
}

const Root = ({ children, inProgress }: PropsType) => {
  return (
    <div className={`${inProgress === 'inProgress' ? `${styles.in__Progress}` : `${styles.root}`}`}>
      {children}
    </div>
  )
}

export default Root
