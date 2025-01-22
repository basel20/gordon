import React from 'react'
import Title from '../../components/Title'
import Apple from '../../images/apple.svg'
import Mac from '../../images/mcdonald.svg'
import SC from '../../images/SC.svg'
import Nike from '../../images/nike.svg'

const clientsData = [
    {
        id: 1,
        title: 'Apple',
        img: Apple
    },
    {
        id: 2,
        title: 'McDonalds',
        img: Mac
    },
    {
        id: 3,
        title: 'Sound Cloud',
        img: SC
    },
    {
        id: 4,
        title: 'Nike',
        img: Nike
    },
]

const Clients = () => {
  return (
    <section className='my-16 md:mb-24'>
      <Title title="OUR CLIENTS"/>

      <div className='flex flex-wrap justify-around items-center gap-y-16 mx-24'>
        {clientsData.map((client) => (
            <div className="h-44 w-44  rounded-full flex items-center justify-center" >
            <img src={client.img} alt={client.title} height={120} width={120}/>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
