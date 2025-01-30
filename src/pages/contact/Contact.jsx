import React from 'react'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'
import clock from '../../images/clock.svg'
import mail from '../../images/mail.svg'
import phone from '../../images/phone.svg'
import MapComponent from '../../components/Map'
import { useTranslation } from 'react-i18next';
import '../../config/i18n'; 

const Contact = () => {

  const { t, i18n } = useTranslation();


  return (
    <>
    <Navbar />
    <section className='my-16 md:mb-24'>
      <Title title={t("CONTACT_US")}/>
      <div className='flex flex-col justify-center items-center gap-16 mx-12 md:mx-32 pt-8'>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-32'>

          <div className='flex flex-col gap-12'>
          <div className='flex gap-8'>
              <img src={phone} alt="phone" height={100} width={100}/>
              <span className='flex flex-col items-start justify-center gap-2'>
                <h4 className='font-semibold text-left text-xl'>+7 (800) 222-11-53</h4>
                {/* <h4 className='font-semibold text-left text-xl'>+7 (800) 555-35-35</h4> */}
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
                <h4 className='font-semibold text-left text-xl'>{t("MON_FRI")}</h4>
                <h4 className='font-semibold text-left text-xl'>9:00 - 18:00</h4>
              </span>
            </div>
          </div>

          <div className="max-w-md w-full border-2 border-[#B79130] p-6">
            <h2 className="text-2xl font-bold text-center mb-6">{t("SEND_MESSAGE")}</h2>
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
                {t("Confirm")}
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
