/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import styles from './styles.module.css'

interface PropsTypeSponsores {
  id: number
  logo: string
  href: string
}

interface PropsType {
  typeSponsors: string
  sponsors: PropsTypeSponsores[]
}

export const Sponsor = ({ sponsors, typeSponsors }: PropsType) => {
  const { sponsor, title, logos, link, image } = styles

  return (
    <div className={sponsor}>
      <h2 className={title}>{typeSponsors}</h2>
      <div className={logos}>
        {sponsors.map(({ id, href, logo }) => (
          <Link key={id} href={href} className={link}>
            <img src={logo} alt={href} className={image} />
          </Link>
        ))}
      </div>
    </div>
  )
}
