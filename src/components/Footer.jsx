import React from 'react'
import Logo from '../images/logo.png'
import TG from '../images/telegram.svg'
import FB from '../images/facebook.svg'
import WA from '../images/whatsapp.svg'
import INST from '../images/instagram.svg'
import { useTranslation } from 'react-i18next';
import '../config/i18n'; 


const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className='mt-10 h-[25rem] bg-black flex flex-col  text-white' >
      
      <div className='flex md:flex-row flex-col justify-around items-center  h-[88%] border-b-2'>

      <div className='hidden md:flex'>
      <a href='/'>
       <img alt='logo' src={Logo} height={100} width={160}/>
       </a>
      </div>
      <div className='flex md:flex-col gap-4 justify-center md:items-start text-lg'>
        <h4>{t('Menu')}</h4>
        <a href='/'>{t('Home')}</a>
        <a href='/about'>{t('About')}</a>
        <a href='/developments'>{t('Developments')}</a>
        <a href='/contact'>{t('Contact')}</a>
      </div>
      <div className='flex flex-col gap-4 justify-center md:items-start text-lg'>
        <p className='text-left'>{t('Location')} <br/> {t('Address')}</p>
        <p>gordon@mail.com</p>
        <p>8 (800) 222-11-53</p>
        {/* <p>8 (800) 555-35-35</p> */}
      </div>
      <div className='flex md:flex-col gap-5 justify-center md:items-start text-lg'>
        <span>
          <img src={TG} alt='telegram' width={30} height={30} className='cursor-pointer' />
        </span>
        <span>
          <img src={FB} alt='facebook' width={30} height={30} className='cursor-pointer' />
        </span>
        <span>
          <img src={WA} alt='whatsapp' width={30} height={30} className='cursor-pointer' />
        </span>
        <span>
          <img src={INST} alt='instagram' width={30} height={30} className='cursor-pointer' />
        </span>
      </div>
      </div>

      <div>
        <p className='text-center pt-2'>© 2023. All rights reserved.</p>
      </div>
    </section>
  )
}

export default Footer
