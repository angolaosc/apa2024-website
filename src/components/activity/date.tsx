import { poppins } from '@/app/fonts'

import styles from './style.module.css'

interface PropsType {
  date: string
}

const Date = ({ date }: PropsType) => {
  return (
    <div className={`styles.date_area`}>
      <span className={`${poppins.className} ${styles.span}`}>{date}</span>
    </div>
  )
}

export default Date
