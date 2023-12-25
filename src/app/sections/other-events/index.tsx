import { Carousel } from '@/components/carousel'

import styles from './styles.module.css'

export const OtherEventsSection = () => {
  return (
    <section className={styles.s__other__event}>
      <div className={styles.container__area}>
        <header>
          <h2 className={styles.title}>Outros Eventos</h2>
        </header>
        <Carousel />
      </div>
    </section>
  )
}
