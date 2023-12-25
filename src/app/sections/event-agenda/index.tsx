/* eslint-disable react/no-children-prop */

import { DailySchedule } from '@/components/daily-schedule'

import { EVENTS } from '../../../../utils/data'
import Header from './header'
import styles from './styles.module.css'

export const EventAgendaSection = () => {
  return (
    <div className={styles.s_event_agenda}>
      <div className={styles.container__area}>
        <Header />
        <div className={styles.events}>
          {EVENTS.map(({ id, position, headerTitle, activities }) => (
            <DailySchedule
              key={id}
              position={position}
              title={headerTitle}
              activities={activities}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
