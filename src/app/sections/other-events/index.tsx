import { poppins } from '@/app/fonts'

import { Carousel } from '@/components/carousel'

import styles from './styles.module.css'

export const OtherEventsSection = () => {
  return (
    <section className={styles.s__other__event}>
      <div className={styles.container}>
        <header>
          <h2 className={`${poppins.className} ${styles.title}`}>Outros Eventos</h2>
        </header>
        <Carousel />
      </div>
    </section>
  )
}
