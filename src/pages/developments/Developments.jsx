import React from 'react'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'
import mapB from '../../images/mapB.png'
import d1 from '../../images/d1.png'
import d2 from '../../images/d2.png'
import d3 from '../../images/d3.png'
import d4 from '../../images/d4.png'
import d5 from '../../images/d5.png'
import { AnimatedTestimonials } from '../../components/AnimatedCard'
import '../../config/i18n'; 
import { useTranslation } from 'react-i18next';


const Developments = () => {

  const { t } = useTranslation();

  const developments = [
    {
      id:1,
      name: t('THE_VYRA_SUITES_DOHA'),
      label: t('THE_VYRA_SUITES_LABELS'),
      description: t('THE_VYRA_SUITES_DES'),
      img:d1
    },
    {
      id:2,
      name: t("THE_PLAZA_DOHA"),
      label: t("THE_PLAZA_DOHA_LABELS"),
      description: t("THE_PLAZA_DOHA_DES"),
      img:d2
    },
    {
      id:3,
      name: t("SAMRYA_GARDENS_DOHA"),
      label: t("SAMRYA_GARDENS_LABELS"),
      description: t("SAMRYA_GARDENS_DES"),
      img:d3
    },
    {
      id:4,
      name: t("AAYAN_WEST_BAY"),
      label: t("AAYAN_WEST_BAY_LABELS"),
      description: t("AAYAN_WEST_BAY_DES"),
      img:d4
    },
    {
      id:5,
      name: t("SAMRYA_TWIN_TOWERS"),
      label: t("SAMRYA_TWIN_TOWERS_LABELS"),
      description: t("SAMARY_TWIN_TOWERS_DES"),
      img:d5
    },
    
  ]

  return (
    <>
     <Navbar />
     <section className='my-16 md:mb-24 '>
      <Title title={t("OUR_DEVELOPMENTS")} />
      <div className='flex flex-col  mt-16 gap-16'>
      <div className='flex flex-col justify-between items-center'>
          <img src={mapB} alt="map" height={500} className='w-[80%] md:w-[70%]'/>
      </div>

      {/* <div className='w-full px-16 md:px-44 flex flex-col gap-16'>

        {developments.map((development) => (
           <div key={development.id} className='w-[100%] flex justify-center items-center gap-16'>
           <div className='flex gap-3'>
           <div className='h-[20rem] w-3 bg-[#C5A759] transform -skew-x-12'></div>
           <div className='transform -skew-x-12'>
             <img src={d1} alt="d1" height={400} width={250}/>
           </div>
           </div>
           <div className='w-2/3 flex flex-col gap-4'>
 
             <div>
               <h1 className='text-3xl font-semibold text-left'>{development.name}</h1>
               <h4 className='text-lg font-semibold text-left text-[#B79130]'>{development.label}</h4>
             </div>
             <p className='text-xl text-left text-gray-700 leading-relaxed'>{development.description}</p>
           </div>
         </div>
        ))}

        <AnimatedTestimonials testimonials={testimonials} />
      </div> */}

      <AnimatedTestimonials testimonials={developments} />

      </div>
      </section> 
    </>
  )
}

export default Developments
