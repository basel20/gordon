import React, { useState , useEffect} from 'react'
import Slider from './Slider'
import Footer from '../../components/Footer'
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.avif'
import img3 from '../../images/3.jpg'
import img from '../../images/mapB.png'
import Logo from '../../images/logo.png'
import AboutSection from './AboutSection'
import ServicesSection from './ServicesSection'
import Clients from './Clients'
import { useTranslation } from 'react-i18next';
import '../../config/i18n';

const Home = () => {

  const { t, i18n } = useTranslation();

  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2000);
  })

  const slides = [
    {
      image: img,
      title: t("WE_ARE"),
      description: t("EVERYWHERE"),
    },
    {
      image: img1,
      title: t("A_LEGACY"),
      description: t("IN_THE_MAKING"),
    },
    {
      image: img2,
      title: t("BUILDING_SUCCESS"),
      description: t("DAILY_BUSINESS"),
    },
    {
      image: img3,
      title: t("OUR_WORK_IS"),
      description: t("DRIVE_AND_PASSION"),
    },
  ];
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
      {/* <Clients /> */}
     
    </article>
      )}
    </>
  )
}

export default Home
