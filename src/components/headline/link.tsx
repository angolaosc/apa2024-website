import Link from 'next/link'

import { YoutubeLogo } from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.css'
import { i18n } from '@/translate/i18n'

const YoutubeLink = () => {
  const url = 'https://www.youtube.com/live/-g3VZCF1-cM?si=Z36E_eVNeZkX8g2h'

  return (
    <Link className={styles.link} href={url} target="_blank">
      <YoutubeLogo size={28} color="#F90000" />
     {i18n.t('section_1.youtube_link')}
    </Link>
  )
}

export default YoutubeLink
