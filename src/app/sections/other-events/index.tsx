/* eslint-disable @typescript-eslint/naming-convention */
import Link from 'next/link'

import { YoutubeLogo } from '@phosphor-icons/react/dist/ssr'

import { Carousel } from '@/components/carousel'

import styles from './styles.module.css'

export const OtherEventsSection = () => {
  const {
    s__other__event,
    container__area,
    title,
    content_area,
    paragraph,
    top_area,
    link,
    carousel_area,
    iFrame,
    vido_area,
  } = styles

  return (
    <section className={s__other__event}>
      <div className={container__area}>
        <div className={top_area}>
          <div className={content_area}>
            <h2 className={title}>Assistir o Evento</h2>
            <p className={paragraph}>Assista a reposição do evento aqui, neste espaço reservado.</p>
            <Link
              className={link}
              href="https://www.youtube.com/live/-g3VZCF1-cM?si=Z36E_eVNeZkX8g2h"
            >
              <YoutubeLogo size={36} color="#F90000" />
              Assistir Agora
            </Link>
          </div>
          <div className={vido_area}>
            <iframe
              className={iFrame}
              src="https://www.youtube.com/embed/-g3VZCF1-cM?si=jV9sjkY45zr5NwUt"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className={carousel_area}>
          <header>
            <h2 className={title}>Outros Eventos</h2>
          </header>
          <Carousel />
        </div>
      </div>
    </section>
  )
}
