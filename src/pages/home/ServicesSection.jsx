import React from 'react'
import Title from '../../components/Title'
import services from './data'

const ServicesSection = () => {
  return (
    <section className='my-16 md:mb-32 flex flex-col gap-8'>
      <Title title="OUR SERVICES" />
      <div className='flex flex-wrap justify-around items-center gap-y-16 mx-24'>
        {services.map((service) => (
          <div key={service.id} className="w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center justify-center gap-4">
            <div className="h-44 w-44 border-4 border-[#B79130] rounded-full flex items-center justify-center" >
            <img src={service.img} alt={service.title} height={100} width={100}/>
            </div>
            <p className="text-xl font-medium">{service.title}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default ServicesSection
