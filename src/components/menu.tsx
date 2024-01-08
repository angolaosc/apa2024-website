import Image from 'next/image'

import styles from '@/styles/menu.module.css'

const Menu = () => {
  return (
    <nav className={styles.container}>
        <div className={styles.boxLogo}>
            <Image src='/logo.svg' alt='apa logo' width={70} height={70}/>
            <p>Associação de<br />programadores Angolanos</p>
        </div>

        <ul className={styles.list_link}>
          <li><a href='#' className={styles.link_selected}>Evento</a></li>
          <li><a href="#">Agenda</a></li>
          <li><a href="#">Informações</a></li>
          <li><a href="#">Patrocinadores</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        <button className={styles.buttonSupport}>Seja Patrocinador</button>
    </nav>
  )
}

export default Menu
