/* eslint-disable @next/next/no-img-element */
'use client'
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */

import Link from 'next/link'

import { CalendarBlank, MapPin, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'

import { Button } from '../button'
import styles from './styles.module.css'

const {
  s_headline, 
  contaner_area, 
  content_area, 
  apa_details, 
  warnings, 
  content, 
  icon, 
  buttons, 
  second, 
  link, 
  chevron,
  boxLight,
  light
 } = styles

const Heading = () =>{
  const url = 'https://www.youtube.com/live/-g3VZCF1-cM?si=Z36E_eVNeZkX8g2h'

    return(
      <section className={s_headline}>
        <div className={contaner_area}>
          <div className={boxLight}>
            <img src="/light.png" alt="light" className={light}/>
          </div>
          <div className={content_area}>
            <h1 className={styles.title}>
              <span className={`${chevron}`}>{"< "}</span>
                APA Conference
               <span className={`${chevron}`}>{">"}</span>
            </h1>
            <p className={styles.description}>
              Prepare-se para mergulhar em debates, workshops e descobertas que impulsionarão a inovação e o progresso na comunidade de programação de Angola. Junte-se a nós nessa jornada de aprendizado e colaboração
            </p>
          </div>
            
         <div className={apa_details}>
          <div className={buttons}>
            <div className={warnings}>
              <span className={content}>
                Data do <br />
                evento por anunciar
              </span>
              <div className={icon}>
                <CalendarBlank size={32} color="#00B0F9" />
              </div>
            </div>
            <div>
              <Button 
                type='button' 
                content='Obter ingresso agora' 
                onClick={()=> { 
                  alert("Funciona")
                }}
              />
            </div>
            <div className={`${warnings} ${second}`}>
              <span className={content}>
                Online no  <br />            
                YouTube! Não perca
              </span>
              <div className={icon}>
                <MapPin size={32} color="#00B0F9" />
              </div>
            </div>
          </div>
          

          <Link className={link} href={url}>
            <YoutubeLogo size={28} color="#F90000" />
            Online no  YouTube! Não perca
          </Link>
         </div>
        </div>
      </section>
    )
}
export default Heading