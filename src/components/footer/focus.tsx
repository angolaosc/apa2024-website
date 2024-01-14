import Image from 'next/image'

import styles from './style.module.css'
import { i18n } from '@/translate/i18n'

export const Focus = () => {
  return (
    <div className={styles.focus}>
      <div className="icon">
        <Image src="/logo.svg" alt="apa logo" width={166} height={132} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{i18n.t('footer.focus.title')}</h2>
        <p className={styles.paragraph}>
        {i18n.t('footer.focus.description')}
        </p>
      </div>
    </div>
  )
}
