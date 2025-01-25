import React, { useState , useEffect} from 'react'
import Slider from './Slider'
import Footer from '../../components/Footer'
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.avif'
import img3 from '../../images/3.jpg'
import Logo from '../../images/logo.png'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import Clients from './Clients'


const slides = [
  // {
  //   image: img1,
  //   title: "A LEGACY .....",
  //   description: "IN THE MAKING",
  // },
  {
    image: img2,
    title: "BUILDING SUCCESS .....",
    description: "IS OUR DAILY BUSINESS",
  },
  {
    image: img3,
    title: "OUR WORK IS .....",
    description: "PUR DRIVE & PASSION",
  },
];
const Home = () => {

  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2000);
  })

  return (
    <>
    {isSplash ? (
        <div className='flex justify-center items-center h-screen bg-[#221e1f]'>
          <img src={Logo} alt='logo' height={200} width={200} /> 
        </div>
      ) :(
      <article>
      <Slider slides={slides}/>
      <AboutSection />
      <ServicesSection/>
      <Clients />
     
    </article>
      )}
    </>
  )
}

export default Home
