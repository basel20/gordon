import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import Menu from './Menu'
const Navbar = ({color}) => {
  return (
    <div>
      <div className='flex justify-between mx-16 items-center h-full md:hidden'>
            <div>
            <img alt='logo' src={Logo} height={'100%'} width={55}/>
            </div>
            <Menu color={color}/>
        </div>

    <div className='h-[6.25rem] hidden md:flex justify-around items-center p-0 m-0'>
      <div >
        <a href='/'>
       <img alt='logo' src={Logo} height={'100%'} width={75}/>
       </a>
      </div>

      <div className={`flex gap-8 list-none text-xl font-medium text-${color} coursor-pointer`}>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/developments'>Developments</a>
        <a href='/contact'>Contact</a>
      </div>
    </div>

    </div>
  )
}

export default Navbar
