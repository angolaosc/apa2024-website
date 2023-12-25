/* eslint-disable react/jsx-no-duplicate-props */
import { type ReactNode } from 'react'

import { poppins } from '@/app/fonts'

import { AboutEvent } from './about'
import styles from './styles.module.css'

interface PropsType {
  urlVideo: string
  title: string
  Icon: ReactNode
  date: string
  details: any[]
}

export const EventCard = ({ Icon, date, title, urlVideo, details }: PropsType) => {
  return (
    <div className={styles.event_card}>
      <iframe
        className={styles.iFrame}
        src={urlVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className={styles.content_area}>
        <header className={styles.header}>
          <h4 className={`${poppins.className} ${styles.title}`}>{title}</h4>
          <div className={styles.date}>
            {Icon}
            <span className={`${poppins.className} ${styles.span}`}>{date}</span>
          </div>
        </header>
        <div className={styles.details}>
          {details.map(({ id, Icon, content }) => (
            <AboutEvent key={id} Icon={<Icon size={28} color="#fff" />} content={content} />
          ))}
        </div>
      </div>
    </div>
  )
}
