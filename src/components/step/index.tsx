
'use client'

import { useState } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

export const Step = () => {

  return (
    <section className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Patrocine Agora</h2>
          <p className={styles.describe}>Para patrocinar, siga os passos abaixos</p>
        </header>

        <div className={styles.content}>

              <div className={styles.contentStep}>
                <div className={styles.step}>
                    <div className={styles.number}>
                        <div className={styles.boxNumber}><p>1</p></div>
                        <div className={styles.line_1}/>
                    </div>

                    <div className={styles.contentInfo}>
                      <p className={styles.infoTitle}>Baixe o nosso Prespectus</p>
                      <p className={styles.infoDescribe}>Baixe o nosso <a>prespectus</a> e leia os termos e propostas</p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.number}>
                        <div className={styles.boxNumber}><p>2</p></div>
                        <div className={styles.line_2}/>
                    </div>

                    <div className={styles.contentInfo}>
                      <p className={styles.infoTitle}>Envie-nos um email</p>
                      <p className={styles.infoDescribe}>
                      Envie-nos um email para <a>apaconference@gmail.com</a> com os<br /> dados da empresa como nome, email, telefone e foto
                      </p>
                    </div>
                </div>
              </div>
             

            <Image src="/group.svg" alt='vector' width={400} height={350} className={styles.vector}/>

        </div>

      

    </section>
  )
}
