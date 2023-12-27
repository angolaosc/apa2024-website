/* eslint-disable @typescript-eslint/naming-convention */

import { PARTNERS, SPONSORS } from '../../../../utils/data'
import { Sponsor } from './sponsor'
import styles from './styles.module.css'

export const Sponsors = () => {
  const { title, paragraph, header, s_sponsores, container_area, sponsores_area } = styles

  return (
    <section className={s_sponsores}>
      <div className={container_area}>
        <header className={header}>
          <h2 className={title}>Patrocinadores</h2>
          <p className={paragraph}>Conheça os nossos patrocinadores</p>
        </header>
        <div className={sponsores_area}>
          {SPONSORS.map(({ id, typeSponsors, sponsors }) => (
            <Sponsor key={id} typeSponsors={typeSponsors} sponsors={sponsors} />
          ))}
        </div>
        <div className={sponsores_area}>
          <Sponsor
            key={Math.floor(Math.random() * 1000)}
            typeSponsors={'Partners'}
            sponsors={PARTNERS}
          />
        </div>
      </div>
    </section>
  )
}