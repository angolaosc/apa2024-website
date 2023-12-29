/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
'use client'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
// @ts-expect-error
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'

import '@splidejs/react-splide/css'

import '@splidejs/react-splide/css/skyblue'
import '@splidejs/react-splide/css/sea-green'

import '@splidejs/react-splide/css/core'
import { EVENTCARDINFORMATION } from '../../../utils/data'
import { EventCard } from '../cards/event-card'
import styles from './styles.module.css'

export const Carousel = () => {
  return (
    <Splide
      className={styles.splide}
      hasTrack={false}
      options={{
        pagination: false,
        rewind: false,
        gap: '4rem',
        perPage: 4,
        perMove: 1,
        breakpoints: {
          1355: {
            perPage: 4,
            gap: '1rem',
          },
          1224: {
            perPage: 3,
            gap: '1rem',
          },
          999: {
            perPage: 2,
            gap: '1rem',
          },
          600: {
            perPage: 1,
            gap: '2rem',
          },
        },
      }}
    >
      <div className={`splide__arrows ${styles.arrows}`}>
        <button className="splide__arrow splide__arrow--prev">
          <ArrowRight color="#fff" size={32} />
        </button>
        <button className="splide__arrow splide__arrow--next">
          <ArrowRight color="#fff" size={32} />
        </button>
      </div>
      <SplideTrack>
        {EVENTCARDINFORMATION.map(({ Icon, date, details, id, title, urlVideo }) => (
          <SplideSlide key={id}>
            <EventCard
              urlVideo={urlVideo}
              date={date}
              Icon={<Icon size={28} color="#fff" />}
              title={title}
              details={details}
            />
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  )
}
