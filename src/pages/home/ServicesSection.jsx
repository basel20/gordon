import React from 'react'
import Title from '../../components/Title'
import services from './data'

const ServicesSection = () => {
  return (
    <section className='my-16 md:mb-32 flex flex-col gap-8'>
      <Title title="OUR SERVICES" />
      <div className='flex flex-wrap justify-center items-center gap-y-16 gap-x-16 md:mx-32'>
        {services.map((service) => (
          <div key={service.id} className="  flex  flex-col items-center justify-center gap-4 px-4">
            <div className="h-44 w-44 border-4 border-[#B79130] rounded-full flex items-center justify-center" >
            <img src={service.img} alt={service.title} height={120} width={120}/>
            </div>
            <p className="text-xl font-medium">{service.title}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default ServicesSection
