import styles from './style.module.css'
import Image from 'next/image'
import { i18n } from '@/translate/i18n'

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
            <h1 className={styles.title}>{i18n.t('page_2.benefit.title')}</h1>
            <p className={styles.describe}>{i18n.t('page_2.benefit.description')}</p>

            <div className={styles.containerContent}>
                <div className={styles.light}/>
                <Content
                    icon='icon1'
                    title={i18n.t('page_2.benefit.card_1.title')}
                    describe={i18n.t('page_2.benefit.card_1.description')}
                />
                  <Content
                    icon='icon2'
                    title={i18n.t('page_2.benefit.card_2.title')}
                    describe={i18n.t('page_2.benefit.card_2.description')}
                />
                  <Content
                    icon='icon3'
                    title={i18n.t('page_2.benefit.card_3.title')}
                    describe={i18n.t('page_2.benefit.card_3.description')}
                />
              
            </div>
        
        </section>
    )
}

export default Benefits