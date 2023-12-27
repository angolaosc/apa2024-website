'use client'
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { List, X } from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.css'

const Header = () => {

  const [activeMobileMenu, setActiveMobileMenu] = useState(false)

  const MENU = [
    {
      id: 0, 
      content: 'Evento', 
      href: '/'
    },
    {
      id: 1, 
      content: 'Agenda', 
      href: '/'
    },
    {
      id: 2, 
      content: 'Informações', 
      href: '/'
    },
    {
      id: 3, 
      content: 'Patrocinadores', 
      href: '/'
    },
    {
      id: 4, 
      content: 'Contacto', 
      href: '/'
    }
  ]

  const {header, container_area, boxLogo, list_link, link, hamburger, mobile_menu, active} = styles

  const toggleMobileMenuState = () => {
    setActiveMobileMenu(prev => !prev)
  }

  return (
    <header className={header}>
      <div className={container_area}>
        <div className={boxLogo}>
          <Image src='/logo.svg' alt='apa logo' width={70} height={70}/>
          <p>Associação de<br />programamdores Angolanos</p>
        </div>

        {activeMobileMenu ? 
          <X 
            color='#fff' 
            size={32} 
            className={hamburger} 
            onClick={toggleMobileMenuState}
          /> 
          : <List 
              color='#fff' 
              size={32} 
              className={hamburger}
              onClick={toggleMobileMenuState}
            />
        }

        <nav className={list_link}>
          {MENU.map(({id, content, href})=>(
            <Link key={id} href='/' className={link}>
              {content}
            </Link>
          ))}
        </nav>

        <button className={styles.buttonSupport}>Seja Patrocinador</button>

        <nav className={`${mobile_menu} ${activeMobileMenu && active}`}>
          {MENU.map(({id, content, href})=>(
            <Link key={id} href='/' className={link}>
              {content}
            </Link>
          ))}
         <button className={styles.buttonSupport}>Seja Patrocinador</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
