
'use client'


import { Button } from '../button'
import Description from './description'
import FirstWarning from './first-warning'
import YoutubeLink from './link'
import SecondWarning from './second-warning'
import styles from './styles.module.css'
import Title from './title'
import Timer from './timer'
import { i18n } from '@/translate/i18n'

const {
  s_headline, 
  container_area, 
  content_area, 
  apa_details, 
  buttons, 
  boxLight,
  light
 } = styles

const Headline = () =>{

    return(
      <section className={s_headline}>
        <div className={boxLight}>
          <img src="/light.png" alt="light" className={light}/>
        </div>
        <div className={container_area}>
          <div className={content_area}>
            <Title content={i18n.t('section_1.title')}/>
           <Description content={i18n.t('section_1.description')}/>
          </div>
            
         <div className={apa_details}>
          <div className={buttons}>
            <FirstWarning />
            <div>
              <Button 
                type='button' 
                content={i18n.t('section_1.button')}
                onClick={()=> { 
                  alert("Chamada para palestrantes está aberta brevemente")
                }}
              />
            </div>
            <SecondWarning />
          </div>
          
          <YoutubeLink />
          <Timer />
         </div>
        </div>
      </section>
    )
}
export default Headline