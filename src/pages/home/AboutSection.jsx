import React from 'react'
import { useTranslation } from 'react-i18next';
import '../../config/i18n'; 

const AboutSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className='my-16 mx-12 md:mx-32 h-full flex flex-col gap-8 justify-center items-center md:mb-32'>
      <div className='flex flex-col items-start justify-center gap-2'>
        <h2 className='text-3xl font-semibold text-[#B79130]'>{t('OUR_VISION')}</h2>
        <p className='text-xl ml-8 md:ml-12 text-left'>{t('VISION_TEXT')}</p>
      </div>

      <div className='flex gap-1'>
        <div className='h-16 w-1 bg-[#B79130]'>
            {''}
        </div>
        <div className='h-16 w-1 mt-2 bg-[#000000]'>
            {''}
        </div>
      </div>

      <div className='flex flex-col items-start justify-center gap-2'>
        <h2 className='text-3xl font-semibold text-[#B79130]'>{t('OUR_PASSION')}</h2>
        <p className='text-xl ml-8 md:ml-12 text-left'>{t('PASSION_TEXT')}</p>
      </div>

      <div className='flex gap-1'>
        <div className='h-16 w-1 bg-[#B79130]'>
            {''}
        </div>
        <div className='h-16 w-1 mt-2 bg-[#000000]'>
            {''}
        </div>
      </div>

      <div className='flex flex-col items-start justify-center gap-2'>
        <h2 className='text-3xl font-semibold text-[#B79130]'>{t('OUR_MISSION')}</h2>
        <p className='text-xl ml-8 md:ml-12 text-left'>{t('MISSION_TEXT')}</p>
      </div>
    </section>
  )
}

export default AboutSection
