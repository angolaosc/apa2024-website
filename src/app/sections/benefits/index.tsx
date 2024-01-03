'use client'
/* eslint-disable @typescript-eslint/naming-convention */

import { Button } from '@/components/button'

import { Benefit } from './benefit'
import { BENEFITS } from './data'
import styles from './styles.module.css'

export const BenefitsSection = () => {
  const { s_benefits, container_area, benefits_area, content_area, title, paragraph } = styles

  return (
    <section className={s_benefits}>
      <div className={container_area}>
        <div className={content_area}>
          <h2 className={title}>
            Explore
            <br />
            os Benefícios do Evento
          </h2>
          <p className={paragraph}>
            Prepare-se para uma imersão completa no mundo da programação e da inovação!
          </p>
          <div>
            <Button
              type="reset"
              content="Submeter uma Palestra"
              onClick={() => {
                alert('Chamada para submissão de palestras estarão disponíveis em breve')
              }}
            />
          </div>
        </div>
        <div className={benefits_area}>
          {BENEFITS.map(({ id, title, paragraph, Icon }) => (
            <Benefit key={id} title={title} Icon={Icon} paragraph={paragraph} />
          ))}
        </div>
      </div>
    </section>
  )
}
