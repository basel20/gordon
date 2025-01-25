import React from 'react'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'
import clock from '../../images/clock.svg'
import mail from '../../images/mail.svg'
import phone from '../../images/phone.svg'
import MapComponent from '../../components/Map'
import { MapContainer } from "react-leaflet"

const Contact = () => {

  const position = [40.73061, -73.935242];


  return (
    <>
    <Navbar />
    <section className='my-16 md:mb-24'>
      <Title title="CONTACT US"/>
      <div className='flex flex-col justify-center items-center gap-16 mx-12 md:mx-32 pt-8'>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-32'>

          <div className='flex flex-col gap-12'>
          <div className='flex gap-8'>
              <img src={phone} alt="phone" height={100} width={100}/>
              <span className='flex flex-col items-start justify-center gap-2'>
                <h4 className='font-semibold text-left text-xl'>+7 (800) 555-35-35</h4>
                <h4 className='font-semibold text-left text-xl'>+7 (800) 555-35-35</h4>
              </span>
            </div>

            <div className='flex gap-8'>
              <img src={mail} alt="mail" height={100} width={100}/>
              <span className='flex flex-col items-start justify-center gap-2'>
                <h4 className='font-semibold text-left text-xl'>mail@mail.com</h4>
                <h4 className='font-semibold text-left text-xl'>gordonhouse@gmail.com</h4>
              </span>
            </div>

            <div className='flex gap-8'>
              <img src={clock} alt="clock" height={100} width={100}/>
              <span className='flex flex-col items-start justify-center gap-2'>
                <h4 className='font-semibold text-left text-xl'>Monday - Friday</h4>
                <h4 className='font-semibold text-left text-xl'>9:00 - 18:00</h4>
              </span>
            </div>
          </div>

          <div className="max-w-md w-full border-2 border-[#B79130] p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Send A Message</h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-4 p-2 text-xl bg-gray-100 border-b border-black focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-2 text-xl bg-gray-100 border-b border-black focus:outline-none"
              />
              <textarea
                placeholder="Message"
                className="w-full mb-4 p-2 text-xl bg-gray-100 border-b border-black focus:outline-none"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#CDB26E] text-white py-2 text-center font-semibold text-xl hover:bg-black transition duration-300 ease-in-out"
              >
                Confirm
              </button>
            </form>
        </div>
        </div>

        <div className="w-[95%] md:w-[80%] h-96">
            <MapComponent />
        </div>


      </div>
    </section>
      
    </>
  )
}

export default Contact
