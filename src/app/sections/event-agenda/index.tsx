/* eslint-disable react/no-children-prop */

import { DailySchedule } from '@/components/daily-schedule'

import { EVENTS } from '../../../../utils/data'
import Header from './header'
import styles from './styles.module.css'

interface PropsType {
  id: string
}

export const EventAgendaSection = ({ id }: PropsType) => {
  return (
    <section className={styles.s_event_agenda} id={id}>
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
    </section>
  )
}
