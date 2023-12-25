import Image from 'next/image'
import Link from 'next/link'

import { ABOUT } from '../../../utils/data'
import styles from './style.module.css'

export const About = () => {
  return (
    <div className={styles.about}>
      {ABOUT.map(({ id, title, children }) => (
        <div key={id} className={styles.children}>
          <h2 className={styles.title}>{title}</h2>
          <nav className={styles.nav}>
            {children.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                className={`${styles.link} ${item.stack && styles.dev}`}
              >
                {item.Icon ? (
                  <item.Icon size={32} color="#ffff" />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={48}
                    height={48}
                    className={styles.image}
                  />
                )}
                <div className={styles.content}>
                  <span className={`${styles.name} ${item.stack && styles.dev}`}>{item.name}</span>
                  <span className={styles.stack}>{item.stack}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      ))}
    </div>
  )
}
