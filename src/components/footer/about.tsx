/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Image from 'next/image'
import Link from 'next/link'

import { ABOUT } from '../../../utils/data'
import styles from './style.module.css'

export const About = () => {
  const { about, nav, link, dev, image, name, stack, content } = styles

  return (
    <div className={about}>
      {ABOUT.map(({ id, title, children }) => (
        <div key={id} className={styles.children}>
          <h2 className={styles.title}>{title}</h2>
          <nav className={nav}>
            {children.map((item) => (
              <Link href={item.href} key={item.id} className={`${link} ${item.stack && dev}`}>
                {item.Icon ? (
                  <item.Icon size={32} color="#ffff" />
                ) : (
                  <Image src={item.src} alt={item.name} width={48} height={48} className={image} />
                )}
                <div className={content}>
                  <span className={`${name} ${item.stack && dev}`}>{item.name}</span>
                  <span className={stack}>{item.stack}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      ))}
    </div>
  )
}
