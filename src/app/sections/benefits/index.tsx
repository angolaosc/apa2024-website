'use client'

import { Button } from '@/components/button'

import { Benefit } from './benefit'
import { BENEFITS } from './data'
import styles from './styles.module.css'
import { i18n } from '@/translate/i18n'

export const BenefitsSection = () => {
  const { s_benefits, container_area, benefits_area, content_area, title, paragraph } = styles

  return (
    <section className={s_benefits}>
      <div className={container_area}>
        <div className={content_area}>
          <h2 className={title}>
            {i18n.t('section_2.title.line_1')}
            <br />
            {i18n.t('section_2.title.line_2')}
          </h2>
          <p className={paragraph}>
          {i18n.t('section_2.description')}
          </p>
          <div>
            <Button
              type="reset"
              content= {i18n.t('section_2.button')}
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
