import { poppins } from '@/app/fonts'
import { Play } from '@phosphor-icons/react/dist/ssr'

import { Activity } from '../activity'
import styles from './style.module.css'

interface PropsType {
  position: number
  title: string
  activities: any[]
}

export const DailySchedule = ({ activities, position, title }: PropsType) => {
  return (
    <div className={styles.daily__schedule}>
      <header className={styles.header}>
        <span className={`${poppins.className} ${styles.span}`}>{position}</span>
        <h2 className={`${poppins.className} ${styles.special__title}`}>{title}</h2>
      </header>
      <div className={styles.children}>
        {activities.map(({ id, date, inProgress, specialGuest, state, title }) => (
          <Activity.Root key={id} inProgress={inProgress}>
            <Activity.Icon Icon={<Play color="#FFCE4F" size={24} />} inProgress={inProgress} />
            <Activity.Date date={date} />
            <Activity.Workshop title={title} specialGuest={specialGuest} />
            <Activity.State state={state} />
          </Activity.Root>
        ))}
      </div>
    </div>
  )
}
