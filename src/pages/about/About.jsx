import React from 'react'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'

const About = () => {
  return (
    <div>
      <Navbar />  
      <section className='my-16'>
      <Title title="ABOUT THE COMPANY" />
      <div className='mx-16 md:mx-44 text-left flex flex-col gap-4'>
        <p>Gordon House International (GHI), is a family owned conglomerate established in Qatar  in 2018 and has successfully established itself as a lucrative development and investment  company in the GCC with diverse businesses in Qatar and Dubai. Gordon House has evolved  over the years from real estate developments and contracting to go on to diverse ventures  entering the field of Hospitality, Asset Management, Aviation, Oil and Gas and Agriculture.  </p>
        <p>A pioneer in turn-key business solutions Gordon House International’s ability to understand  the varying trends within the market has allowed the company to achieve high investment  returns through various ventures within the GCC. The company is headed by astute Qatari  businessman Ali AlKhayarin, as Chairman; with his sons on the Board of Directors – Sultan  Ali Alkhayarin, Group CEO; Abdulhadi Ali AlKhayarin, Group CEO; Mohamed AlKhayarin, COO  and Fahad AlKhayarin as Board Director.  </p>
        <p>Driven by the Board’s passion for luxury, elegance, and beauty, merged with punctuality,  precision and quality; Trading & Contracting was established to ensure the company’s  developments embedded both concepts with excellence and attention to detail in every  corner - from the moment of conception to project launching. </p>
        <p>To ensure quality and excellence within a corporate governance,  Gordon House was  established as Group company with businesses under its management with the role to  ensure the translation of the company’s vision and expand Gordon House’s operations  outside of Qatar. Hospitality was also established to fully manage, operate, and oversee all  the developments within Gordon House in every hospitality aspect essential for the project  from project management to asset and facilities management. Agriculture was established  in 2021 for the development of Agriculture and farming solutions in support of the local  country demands of fresh produce. Aviation Maintenance and Manpower solutions was also  launched in 2024 to oversee aircraft technical maintenance requirements and the acquiring  of professional aviation specialists. </p>
        <p>GHI is currently expanding its operations withing the diverse business of property  development and oil and gas in Dubai and the GCC with aggressive future expansions in  the pipeline.</p>
      
      </div>
      </section>
  
    </div>
  )
}

export default About
