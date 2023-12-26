/* eslint-disable @typescript-eslint/naming-convention */
import { Play } from '@phosphor-icons/react/dist/ssr'

import { Activity } from '../activity'
import styles from './style.module.css'

interface PropsType {
  position: number
  title: string
  activities: any[]
}

export const DailySchedule = ({ activities, position, title }: PropsType) => {
  const { daily__schedule, header, span, special__title, children } = styles

  return (
    <div className={daily__schedule}>
      <header className={header}>
        <span className={span}>{position}</span>
        <h2 className={special__title}>{title}</h2>
      </header>
      <div className={children}>
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
