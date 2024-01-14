import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { i18n } from '@/translate/i18n';

const Timer = () =>{
    
    const eventDate = new Date('2024-03-22T00:00:00') as any;

    const calculatorTimeLeft = ()=>{
        const dateNow = new Date() as any;
        const subDate = eventDate - dateNow;
    
        const days = Math.floor(subDate / (1000 * 60 * 60 * 24));
        const hours = Math.floor((subDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((subDate % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((subDate % (1000 * 60)) / 1000);
    
        return { days, hours, minutes, seconds };

      }
   
    const [timeLeft, setTimeLeft] = useState<any>(calculatorTimeLeft());
    const { days, hours, minutes, seconds} = timeLeft
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setTimeLeft(calculatorTimeLeft());
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);
    return(
        <div className={styles.contentTimer}>
            <p className={styles.titleTimer}><i className='bx bx-chevron-left'></i>{i18n.t('section_1.timer.title')}<i className='bx bx-chevron-right'></i></p>
            <div className={styles.contentInfoTimeLeft}>
                <p><span>{days < 10 ? `0${days}` : days}</span> <span>{i18n.t('section_1.timer.info_1')}</span></p>
                <p><span>{hours < 10 ? `0${hours}` : hours}</span> <span>{i18n.t('section_1.timer.info_2')}</span></p>
                <p><span>{minutes < 10 ? `0${minutes}` : minutes}</span> <span>{i18n.t('section_1.timer.info_3')}</span></p>
                <p><span>{seconds < 10 ? `0${seconds}` : seconds}</span> <span>{i18n.t('section_1.timer.info_4')}</span></p>
            </div>
            
        </div>
    )
}

export default Timer