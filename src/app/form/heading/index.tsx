/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
'use client'
import { Button } from '@/components/button'
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */

import Description from './description'
import styles from './styles.module.css'
import Title from './title'

const {
  s_headline, 
  contaner_area, 
  content_area, 
  apa_details, 
  buttons, 
  boxLight,
  light
 } = styles

const Heading = () =>{

    return(
      <section className={s_headline}>
        <div className={contaner_area}>
          <div className={boxLight}>
            <img src="/light.png" alt="light" className={light}/>
          </div>
          <div className={content_area}>
            <Title content='Seja um Patrocinador'/>
           <Description content='Faça parte da revolução tecnológica em Angola. Seja um patrocinador e impulsione a inovação conosco'/>
          </div>
            
         <div className={apa_details}>
          <div className={buttons}>
            <div>
              <Button 
                type='button' 
                content='Saiba como patrocinar' 
                onClick={()=> { 
                  alert("Funciona")
                }}
              />
            </div>
          </div>
          
         </div>
        </div>
      </section>
    )
}
export default Heading