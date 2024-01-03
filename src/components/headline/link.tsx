import Link from 'next/link'

import { YoutubeLogo } from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.css'

const YoutubeLink = () => {
  const url = 'https://www.youtube.com/live/-g3VZCF1-cM?si=Z36E_eVNeZkX8g2h'

  return (
    <Link className={styles.link} href={url} target="_blank">
      <YoutubeLogo size={28} color="#F90000" />
      Assistir APA Conference 2020 recording
    </Link>
  )
}

export default YoutubeLink
