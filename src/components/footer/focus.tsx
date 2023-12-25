import Image from 'next/image'

import styles from './style.module.css'

export const Focus = () => {
  return (
    <div className={styles.focus}>
      <div className="icon">
        <Image src="/logo.svg" alt="apa logo" width={166} height={132} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>Associação de programamdores Angolanos</h2>
        <p className={styles.paragraph}>
          A Associação dos Programadores Angolanos (APA) é uma comunidade unida em torno do avanço e
          promoção da programação em Angola. Buscamos criar oportunidades, promover o aprendizado e
          impulsionar o crescimento da indústria tecnológica no país
        </p>
      </div>
    </div>
  )
}
