"use client"

import React from 'react'
import MenuIcon from '../images/menu.svg'


const Menu = () => {

  const [isOpen, setIsOpen] = React.useState(false)


  return (
    <div className=''>
      <img src={MenuIcon} alt='menu' width={28} height={28}  className='cursor-pointer bg-white' onClick={()=> setIsOpen(!isOpen)} />
      { isOpen && (
        <div className='absolute bg-black text-white left-0 w-full h-[100vh] text-lg z-10 -mt-14 flex flex-col gap-8 justify-center items-center'>
            <span className='absolute top-10 right-16 h-8 w-8 cursor-pointer rounded-full border-2 border-white' onClick={()=> setIsOpen(!isOpen)}>
                X
            </span>

            <div className='flex flex-col gap-8 justify-center items-center'>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/developments'>Developments</a>
            <a href='/contact'>Contact</a>
            </div>
        </div>
        ) }
    </div>
  )
}

export default Menu
