import React from 'react'

const AboutSection = () => {
  return (
    <section className='my-16 mx-16 md:mx-32 h-full flex flex-col gap-8 justify-center items-center md:mb-32'>
      <div className='flex flex-col items-start justify-center gap-2'>
        <h2 className='text-3xl font-semibold text-[#B79130]'>OUR VISION .........</h2>
        <p className='text-xl ml-12 text-left'>To redefine the perception of luxury as an overall elevated customer  experience within all the Group’s services; pioneering in diverse business  concepts through well-designed, sustainable and innovative concepts,  with strategic global partnerships and ventures in Qatar and the region.</p>
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
        <h2 className='text-3xl font-semibold text-[#B79130]'>OUR PASSION  .........</h2>
        <p className='text-xl ml-12 text-left'>for luxury, attention to detail and precision is a culture we  witness every day and is translated in every aspect of our business, as the  fundamental essence of our strive towards success – because building  success stories is our business.</p>
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
        <h2 className='text-3xl font-semibold text-[#B79130]'>OUR MISSION .........</h2>
        <p className='text-xl ml-12 text-left'>Our commitment is to deliver luxury, value and quality excellence, by  continuously striving to transform our passion into reality within each of  our developments; through creative innovation, industry knowledge and  expertise.</p>
      </div>
    </section>
  )
}

export default AboutSection
