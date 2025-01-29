import React from 'react'
import Logo from '../images/logo.png'
import Menu from './Menu'
import { useTranslation } from 'react-i18next';
import '../config/i18n'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLanguage } from '@fortawesome/free-solid-svg-icons';
const Navbar = ({color}) => {

  const { t, i18n } = useTranslation();
  const switchLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
  };


  return (
    <div>
      <div className='flex justify-between mx-16 items-center h-full md:hidden'>
            <div>
            <img alt='logo' src={Logo} height={'100%'} width={55}/>
            </div>
            <Menu color={color}/>
        </div>

    <div className='h-[6.25rem] hidden md:flex justify-around items-center p-0 m-0'>
      <div >
        <a href='/'>
       <img alt='logo' src={Logo} height={'100%'} width={75}/>
       </a>
      </div>

      <div className={`flex gap-8 list-none text-xl font-medium text-${color} coursor-pointer`}>
        <a href='/' className='hover:text-[#FFD700]'>{t('Home')}</a>
        <a href='/about' className='hover:text-[#FFD700]'>{t('About')}</a>
        <a href='/developments' className='hover:text-[#FFD700]'>{t('Developments')}</a>
        <a href='/contact' className='hover:text-[#FFD700]'>{t('Contact')}</a>
        <button
          onClick={switchLanguage}
          className=" rounde "
          aria-label="Switch Language"
        >
          <FontAwesomeIcon icon={faGlobe}  color={color} className='hover:text-[#FFD700] h-6 w-6'/>
        </button>
      </div>
    </div>

    </div>
  )
}

export default Navbar
