'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import { UseScrollPage } from '@/hooks/use-scroll-page'
import { List, X } from '@phosphor-icons/react/dist/ssr'

import { MENU } from './data'
import styles from './styles.module.css'
import { i18n } from '@/translate/i18n'

const Header = () => {

  const I18N_KEY = "i18nextLng"

  const [activeMobileMenu, setActiveMobileMenu] = useState(false)
  const [linkClicked, setLinkClicked] = useState(100)
  const [showLanguage, setShowLanguage] = useState(false)
  const [language, setLanguage] = useState<any>('PT')

  const handleChangeLanguage = (value:any)=>{
    localStorage.setItem('i18nextLng', value)
    window.location.reload()
}

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
        setLanguage(localStorage.getItem(I18N_KEY) === 'pt-BR' ? 'PT' : 'EN')
    }
  }, []);



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
          <span className={styles.logoName}>Associação de<br />programamdores Angolanos</span>
        </Link>

       

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

        <div className={styles.boxButton}>
          <div style={{position:'relative'}}>
              <button className={styles.buttonIdiom} onClick={()=>setShowLanguage(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 31 28" fill="none">
              <path d="M15.5002 25.6667C22.6338 25.6667 28.4168 20.4433 28.4168 14C28.4168 7.55669 22.6338 2.33334 15.5002 2.33334C8.36649 2.33334 2.5835 7.55669 2.5835 14C2.5835 20.4433 8.36649 25.6667 15.5002 25.6667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.5835 14H28.4168" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.5002 2.33334C18.731 5.52809 20.5671 9.67405 20.6668 14C20.5671 18.326 18.731 22.4719 15.5002 25.6667C12.2693 22.4719 10.4333 18.326 10.3335 14C10.4333 9.67405 12.2693 5.52809 15.5002 2.33334Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {language}
            <i className='bx bx-chevron-down'></i>
            </button>

            <div className={
              showLanguage ? `${styles.contentLanguage} ${styles.showContentLanguage}`: 
              `${styles.contentLanguage} ${styles.hideContentLanguage}`}>
              <button onClick={()=>handleChangeLanguage('pt-BR')}>Português</button>
              <button onClick={()=>handleChangeLanguage('en-US')}>Inglês</button>
            </div>
          </div>
       

        <Link 
          href={'/form'}
          className={styles.buttonSupport}
        >
          {i18n.t('nav.button')}
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
           {i18n.t('nav.button')}
          </Link>
        </nav>

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
        </div>
      </div>
    </header>
  )
}

export default Header
