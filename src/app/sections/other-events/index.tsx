
import { Carousel } from '@/components/carousel'

import styles from './styles.module.css'
import { i18n } from '@/translate/i18n'


export const OtherEventsSection = () => {
  const { s__other__event, container__area, title } = styles

  return (
    <section className={s__other__event}>
      <div className={container__area}>
        <header>
          <h2 className={title}>{i18n.t('section_5.title')}</h2>
        </header>
        <Carousel />
      </div>
    </section>
  )
}
