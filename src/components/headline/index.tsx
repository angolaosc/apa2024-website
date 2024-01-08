
'use client'


import { Button } from '../button'
import Description from './description'
import FirstWarning from './first-warning'
import YoutubeLink from './link'
import SecondWarning from './second-warning'
import styles from './styles.module.css'
import Title from './title'
import Timer from './timer'

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
            <Title content='APA Conference 2024'/>
           <Description content='Prepare-se para mergulhar em debates, workshops e descobertas que impulsionarão a inovação e o progresso na comunidade de programação de Angola. Junte-se a nós nessa jornada de aprendizado e colaboração'/>
          </div>
            
         <div className={apa_details}>
          <div className={buttons}>
            <FirstWarning />
            <div>
              <Button 
                type='button' 
                content='Submeter uma Palestra' 
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