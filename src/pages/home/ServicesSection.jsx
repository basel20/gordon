import React from 'react'
import Title from '../../components/Title'
import srv1 from '../../images/company.svg';
import srv2 from '../../images/restaurant.svg';
import srv3 from '../../images/travel.svg';
import srv4 from '../../images/options.svg';
import srv5 from '../../images/oil.svg'
import srv6 from '../../images/plant.svg'
import srv7 from '../../images/suitcase.svg'
import srv8 from '../../images/people.svg'
import { useTranslation } from 'react-i18next';
import '../../config/i18n'; 

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t('PROPERTY_DEVELOPMENT'),  // Translated title
      img: srv1,
    },
    {
      id: 2,
      title: t('HOSPITALITY_SERVICES'),  // Translated title
      img: srv2,
    },
    {
      id: 3,
      title: t('AVIATION_MAINTENANCE'),  // Translated title
      img: srv3,
    },
    {
      id: 4,
      title: t('TRADING_AND_CONTRACTING'),  // Translated title
      img: srv4,
    },
    {
      id: 5,
      title: t('FACILITY_ASSET'),  // Translated title
      img: srv8,
    },
    {
      id: 6,
      title: t('BUSINESS_DEVELOPMENT'),  // Translated title
      img: srv7,
    },
    {
      id: 7,
      title: t('AGRICULTURE'),  // Translated title
      img: srv6,
    },
    {
      id: 8,
      title: t('INVESTMENTS_VENTURES'),  // Translated title
      img: srv5,
    },
  ]

  return (
    <section className='my-16 md:mb-32 flex flex-col gap-8'>
      <Title title={t("OUR_SERVICES")} />
      <div className='flex flex-wrap justify-center items-center gap-y-20 gap-x-16 md:mx-32'>
        {services.map((service) => (
          <div key={service.id} className="  flex  flex-col items-center justify-center gap-4 px-4">
            <div className="h-44 w-44 border-4 border-[#B79130] rounded-full flex items-center justify-center" >
            <img src={service.img} alt={service.title} height={120} width={120}/>
            </div>
            <p className="w-48 h-16 text-xl font-medium">{service.title}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default ServicesSection
