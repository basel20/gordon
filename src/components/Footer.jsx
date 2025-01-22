import React from 'react'
import Logo from '../images/logo.png'
import TG from '../images/telegram.svg'
import FB from '../images/facebook.svg'
import WA from '../images/whatsapp.svg'
import INST from '../images/instagram.svg'

const Footer = () => {
  return (
    <section className='mt-10 h-[25rem] bg-black flex flex-col  text-white' >
      
      <div className='flex md:flex-row flex-col justify-around items-center  h-[88%] border-b-2'>

      <div className='hidden md:flex'>
      <a href='/'>
       <img alt='logo' src={Logo} height={100} width={160}/>
       </a>
      </div>
      <div className='flex md:flex-col gap-4 justify-center md:items-start text-lg'>
        <h4>Menu</h4>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/developments'>Developments</a>
        <a href='/contact'>Contact</a>
      </div>
      <div className='flex flex-col gap-4 justify-center md:items-start text-lg'>
        <p>Russia, Moscow, Lenina street, 15</p>
        <p>gordon@mail.com</p>
        <p>8 (800) 555-35-35</p>
        <p>8 (800) 555-35-35</p>
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
