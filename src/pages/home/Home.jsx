import React from 'react'
import Slider from './Slider'
import Footer from '../../components/Footer'
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.avif'
import img3 from '../../images/3.jpg'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import Clients from './Clients'


const slides = [
  {
    image: img1,
    title: "A LEGACY .....",
    description: "IN THE MAKING",
  },
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
  return (
    <>
    <Slider slides={slides}/>
    <AboutSection />
    <ServicesSection/>
    <Clients />
    <Footer />
    </>
  )
}

export default Home
