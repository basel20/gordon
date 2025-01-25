import React from 'react'

const Title = ({title}) => {
  return (
    <section className='flex flex-col '>
      <div className='flex flex-col gap-1'>
        <div className='h-1 w-[50%] md:w-52 bg-[#B79130]'>
            {''}
        </div>
        <div className='h-1 w-[50%] md:w-52  bg-[#000000]'>
            {''}
        </div>
      </div>

      <h1 className='text-3xl font-semibold text-center md:text-left    md:ml-32 my-4'>{title}</h1>
    </section>
  )
}

export default Title
