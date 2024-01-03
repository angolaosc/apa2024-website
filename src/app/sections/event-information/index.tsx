/* eslint-disable @typescript-eslint/naming-convention */
import Link from 'next/link'

import { YoutubeLogo } from '@phosphor-icons/react/dist/ssr'

import { EventInformation } from '@/components/cards/event-information'

import { EVENTINFORMATION } from '../../../../utils/data'
import styles from './styles.module.css'

interface PropsType {
  id: string
}

export const EventInformationsSection = ({ id }: PropsType) => {
  const url = 'https://www.youtube.com/live/-g3VZCF1-cM?si=Z36E_eVNeZkX8g2h'

  const {
    s_event_information,
    container__area,
    title,
    content_area,
    paragraph,
    top_area,
    link,
    event_informations,
    bottom_area,
    iFrame,
    vido_area,
  } = styles

  return (
    <section className={s_event_information} id={id}>
      <div className={container__area}>
        <div className={top_area}>
          <div className={content_area}>
            <h2 className={title}>Informações do Evento</h2>
            <p className={paragraph}>Saiba um pouco mais sobre a Conferência APA</p>
          </div>
          <div className={event_informations}>
            {EVENTINFORMATION.map(({ id, title, paragraph }) => (
              <EventInformation key={id} title={title} paragraph={paragraph} />
            ))}
          </div>
        </div>

        <div className={bottom_area}>
          <div className={content_area}>
            <h2 className={title}>Assistir APA 2020</h2>
            <p className={paragraph}>Assista a reposição do evento aqui, neste espaço reservado.</p>
            <Link className={link} href={url}>
              <YoutubeLogo size={36} color="#F90000" />
              Assistir Agora
            </Link>
          
          </div>
          <div className={vido_area}>
            <iframe
              className={iFrame}
              src="https://www.youtube.com/embed/5WexLRZwmeo?si=qUJzrNlSAHqwI6gL" title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
