
'use client'

import { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { i18n } from '@/translate/i18n'
export const Step = () => {

  return (
    <section className={styles.container}>
      <div className={styles.section}>
      <header className={styles.header}>
          <h2 className={styles.title}>{i18n.t('page_2.sponsor.title')}</h2>
          <p className={styles.describe}>{i18n.t('page_2.sponsor.description')}</p>
        </header>

        <div className={styles.content}>

              <div className={styles.contentStep}>
                <div className={styles.step}>
                    <div className={styles.number}>
                        <div className={styles.boxNumber}><p>1</p></div>
                        <div className={styles.line_1}/>
                    </div>

                    <div className={styles.contentInfo}>
                      <p className={styles.infoTitle}>{i18n.t('page_2.sponsor.step_1.title')}</p>
                      <p className={styles.infoDescribe}>
                        {i18n.t('page_2.sponsor.step_1.description.part_1')}
                        <a href='#'>{i18n.t('page_2.sponsor.step_1.description.link')}</a>
                        {i18n.t('page_2.sponsor.step_1.description.part_3')}
                        </p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.number}>
                        <div className={styles.boxNumber}><p>2</p></div>
                        <div className={styles.line_2}/>
                    </div>

                    <div className={styles.contentInfo}>
                      <p className={styles.infoTitle}> {i18n.t('page_2.sponsor.step_2.title')}</p>
                      <p className={styles.infoDescribe}>
                      {i18n.t('page_2.sponsor.step_2.description.part_1')} 
                      <a> {i18n.t('page_2.sponsor.step_2.description.link')}</a>
                      {i18n.t('page_2.sponsor.step_2.description.part_2')}<br /> 
                      {i18n.t('page_2.sponsor.step_2.description.part_3')}
                      </p>
                    </div>
                </div>
              </div>
             

            <Image src="/group.svg" alt='vector' width={400} height={350} className={styles.vector}/>

        </div>
      </div>
        

      

    </section>
  )
}
