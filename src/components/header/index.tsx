/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prettier/prettier */
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { UseScrollPage } from '@/hooks/use-scroll-page'
import { List, X } from '@phosphor-icons/react/dist/ssr'

import { MENU } from './data'
import styles from './styles.module.css'

const Header = () => {

  const [activeMobileMenu, setActiveMobileMenu] = useState(false)
  const [linkClicked, setLinkClicked] = useState(100)

  const {header, container_area, boxLogo, list_link, link, hamburger, mobile_menu, active} = styles

  const scrollThePage = (event: any, href: any, id: number) => {
   const itsValid = href !== '/'

   if(itsValid){
     UseScrollPage({ event, href });
   }

    setLinkClicked(id)
    setActiveMobileMenu(false)
  };

  const toggleMobileMenuState = () => {
    setActiveMobileMenu(prev => !prev)
  }

  return (
    <header className={header}>
      <div className={container_area}>
        <Link 
          href={'/'} 
          className={boxLogo}
        >
          <Image src='/logo.svg' alt='apa logo' width={70} height={70}/>
          <span>Associação de<br />programamdores Angolanos</span>
        </Link>

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
          {MENU.map(({id, content, target})=>(
            <Link
              href={target}
              onClick={(e) => { scrollThePage(e, target, id); }}
              key={id}
              className={`${link} ${id=== linkClicked && active}`}>
              {content}
            </Link>
          ))}
        </nav>

        <Link 
          href={'/form'}
          className={styles.buttonSupport}
        >
          Seja Patrocinador
        </Link>

        <nav className={`${mobile_menu} ${activeMobileMenu && active}`}>
          {MENU.map(({id, content, target})=>(
            <Link
              href={target}
              onClick={(e) => { scrollThePage(e, target, id); }}
              key={id}
              className={`${link} ${id=== linkClicked && active}`}>
              {content}
            </Link>
          ))}
          <Link 
            href={'/form'}
            className={styles.buttonSupport}
           >
            Seja Patrocinador
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
