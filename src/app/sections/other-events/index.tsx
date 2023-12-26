/* eslint-disable @typescript-eslint/naming-convention */
import { Carousel } from '@/components/carousel'

import styles from './styles.module.css'

export const OtherEventsSection = () => {
  const { s__other__event, container__area, title } = styles

  return (
    <section className={s__other__event}>
      <div className={container__area}>
        <header>
          <h2 className={title}>Outros Eventos</h2>
        </header>
        <Carousel />
      </div>
    </section>
  )
}
