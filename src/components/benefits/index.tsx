import styles from './style.module.css'

const Content = () =>{
    return(
        <div className={styles.content}>
            <h2 className={styles.contentTitle}>Visiblidade de Marca</h2>
            <p className={styles.describeContent}>
                Os patrocinadores têm a oportunidade de aumentar sua visibilidade entre um público altamente segmentado. Sua marca será destacada nos materiais de marketing do evento, incluindo site, redes sociais, materiais promocionais e durante o próprio evento, gerando reconhecimento e alcance
            </p>

        </div>
    )
}

const Benefits = ()=>{
    return(
        <section className={styles.container}>
            <h1 className={styles.title}>Benefícios</h1>
            <p className={styles.describe}>Conheça os benefícios de patrocinar</p>

            <div className={styles.containerContent}>
                <Content />
            </div>
        
        </section>
    )
}

export default Benefits