import React from 'react'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'
import { useTranslation } from 'react-i18next';
import '../../config/i18n'; 

const About = () => {

  const { t } = useTranslation();

  return (
    <div>
      <Navbar />  
      <section className='my-16'>
      <Title title={t("ABOUT_THE_COMPANY")} />
      <div className='mx-16 md:mx-44 text-left flex flex-col gap-4'>
        <p className='text-xl leading-normal'>{t('GHI_DESCRIPTION_1')}</p>
        <p className='text-xl leading-normal' >{t('GHI_DESCRIPTION_2')}</p>
        <p className='text-xl leading-normal'>{t('GHI_DESCRIPTION_3')}</p>
        <p className='text-xl leading-normal'>{t('GHI_DESCRIPTION_4')}</p>
        <p className='text-xl leading-normal'>{t('GHI_DESCRIPTION_5')}</p>
      
      </div>
      </section>
    </div>
  )
}

export default About
