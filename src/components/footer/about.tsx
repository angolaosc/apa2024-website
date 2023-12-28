/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Image from 'next/image'
import Link from 'next/link'

import { CONTACTS, PAGENAVIGATION, SOCIALMEDIA, VOLUNTEERPROFESSIONALS } from '../../../utils/data'
import styles from './style.module.css'

export const About = () => {
  const { about, nav, link, dev, image, content, phone, socialMedia } = styles

  return (
    <div className={about}>
      <div className={styles.children}>
        <h2 className={styles.title}>{VOLUNTEERPROFESSIONALS.title}</h2>
        <nav className={nav}>
          {VOLUNTEERPROFESSIONALS.children.map(({ href, id, name, src, stack }) => (
            <Link href={href} target="_blank" key={id} className={`${link} ${stack && dev}`}>
              <Image src={src} alt={name} width={48} height={48} className={image} />
              <div className={content}>
                <span className={`${styles.name} ${stack && dev}`}>{name}</span>
                <span className={styles.stack}>{stack}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      <div className={styles.children}>
        <h2 className={styles.title}>{PAGENAVIGATION.title}</h2>
        <nav className={nav}>
          {PAGENAVIGATION.children.map(({ Icon, href, id, name }) => (
            <Link href={href} key={id} className={link}>
              <Icon size={32} color="#ffff" />

              <div className={content}>
                <span className={styles.name}>{name}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      <div className={styles.children}>
        <h2 className={styles.title}>{CONTACTS.title}</h2>
        <nav className={nav}>
          {CONTACTS.children.map(({ Icon, href, id, name }) => (
            <Link href={href} key={id} className={`${link} ${id === 1 && phone}`}>
              <Icon size={32} color="#ffff" />

              <div className={content}>
                <span className={styles.name}>{name}</span>
              </div>
            </Link>
          ))}
        </nav>
        <nav className={socialMedia}>
          {SOCIALMEDIA.map(({ Icon, href, id }) => (
            <Link href={href} target="_blank" key={id} className={link}>
              <Icon size={32} color="#ffff" weight="bold" />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
