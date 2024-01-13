
'use client'
import { Button } from '@/components/button'
import Description from './description'
import styles from './styles.module.css'
import Title from './title'
import Benefits from '@/components/benefits'

const {
  s_headline, 
  container_area, 
  content_area, 
  apa_details, 
  buttons, 
  boxLight,
  light
 } = styles

const HeadLine = () =>{

    return(
      <section className={s_headline}>
        <div className={boxLight}>
          <img src="/light.png" alt="light" className={light}/>
        </div>
        <div className={container_area}>
          <div className={content_area}>
            <Title content='Seja um Patrocinador'/>
           <Description content='Faça parte da revolução tecnológica em Angola. Seja um patrocinador e impulsione a inovação conosco'/>
          </div>
            
         <div className={apa_details}>
          <div className={buttons}>
            <div>
              <Button 
                type='button' 
                content='Baixe o Prospectus' 
                onClick={()=> { 
                  alert("Funciona")
                }}
              />
            </div>
          </div>
          
         </div>
        
        </div>
        <Benefits />
      </section>
    )
}
export default HeadLine