import styles from './style.module.css'
import Image from 'next/image'

const Content = (props:{title:string, describe:string, icon:string}) =>{
    const {title, describe, icon} = props
    return(
        <div className={styles.boxContent}>
            <Image src={`/${icon}.png`} alt='benefit icon' width={125} height={125} className={styles.icon}/>
            <div className={styles.content}>
                <h2 className={styles.contentTitle}>{title}</h2>
                <p className={styles.describeContent}>
                    {describe}
                </p>

            </div>
        </div>
    )
}

const Benefits = ()=>{
    return(
        <section className={styles.container}>
            <h1 className={styles.title}>Benefícios</h1>
            <p className={styles.describe}>Conheça os benefícios de patrocinar</p>

            <div className={styles.containerContent}>
                <div className={styles.light}/>
                <Content
                    icon='icon1'
                    title='Visibilidade de Marca'
                    describe='Os patrocinadores têm a oportunidade de aumentar sua visibilidade entre um público altamente segmentado. Sua marca será destacada nos materiais de marketing do evento, incluindo site, redes sociais, materiais promocionais e durante o próprio evento, gerando reconhecimento e alcance'
                />
                <Content
                    icon='icon2'
                    title='Networking Estratégico'
                    describe='Ao patrocinar o evento, as empresas têm acesso a uma rede exclusiva de profissionais da indústria, líderes de pensamento e potenciais parceiros de negócios. Isso proporciona oportunidades valiosas para estabelecer conexões significativas e explorar colaborações futuras'
                />
                <Content 
                    icon='icon3'
                    title='Demonstração de Apoio à Comunidade'
                    describe='O apoio a eventos locais e à comunidade de programação demonstra o comprometimento da empresa com o crescimento e desenvolvimento do setor tecnológico. Isso pode aumentar a reputação da marca como uma empresa que valoriza e investe no avanço da tecnologia e na formação de profissionais qualificados'
                />
            </div>
        
        </section>
    )
}

export default Benefits