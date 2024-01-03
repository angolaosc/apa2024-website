/* eslint-disable @typescript-eslint/naming-convention */

import { PARTNERS } from '../../../../utils/data'
import { Sponsor } from './sponsor'
import styles from './styles.module.css'
import { Button } from '@/components/button'

interface PropsType {
  id: string
}

export const Sponsors = ({ id }: PropsType) => {
  const { title, paragraph, header, s_sponsores, container_area, sponsores_area } = styles

  return (
    <section className={s_sponsores} id={id}>
      <div className={container_area}>
        <header className={header}>
          <h2 className={title}>Patrocinadores</h2>
          <p className={paragraph}>Conheça os nossos patrocinadores</p>
        </header>
        <div className={sponsores_area}>
          <Sponsor
            key={Math.floor(Math.random() * 1000)}
            typeSponsors={'Partners'}
            sponsors={PARTNERS}
          />
        </div>
        <div className={sponsores_area}>
          <Button type="reset" content="Seja um Patrocinador" />
        </div>
      </div>
    </section>
  )
}
