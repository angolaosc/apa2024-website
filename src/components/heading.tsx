/* eslint-disable prettier/prettier */
import Menu from "./menu"
import styles from "@/styles/heading.module.css"

const Heading = () =>{
    return(
        <section className={styles.container}>
            <Menu />
            <div className={styles.boxLight}/>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    <i className='bx bxs-chevron-left'/>
                    APA Conference
                    <i className='bx bxs-chevron-right'/>
                </h1>
                <p className={styles.description}>Prepare-se para mergulhar em debates, workshops e descobertas que impulsionarão a inovação e o progresso na comunidade de programação de Angola. Junte-se a nós nessa jornada de aprendizado e colaboração</p>
                <div className={styles.contentInfo}>
                    <div className={styles.contentIcon}>
                        <p className={styles.txtData}>Data do <br />evento por anunciar</p>
                        <div className={styles.boxIcon}><i className='bx bx-calendar-week'></i></div>
                    </div>

                    <button className={styles.buttonGet}>Obter ingresso agora</button>

                    <div className={styles.contentIcon}>
                        <div className={styles.boxIcon}><i className='bx bx-map' ></i></div>
                        <p className={styles.txtOnline}>Online no <br/> Youtube ! não perca</p>
                    </div>

                </div>
                <p className={styles.txtInfo}><i className='bx bxl-youtube'></i> Online no Youtube! Não perca</p>
            </div>
            
        </section>
    )
}
export default Heading