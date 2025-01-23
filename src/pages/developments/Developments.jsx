import React from 'react'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'
import mapB from '../../images/mapB.png'
import d1 from '../../images/d1.png'
import d2 from '../../images/d2.png'
import d3 from '../../images/d3.png'

const developments = [
  {
    id:1,
    name:"THE VYRA SUITES DOHA",
    label:"HOSPITALITY | TOWER | WESTBAY AREA",
    description:"The Vyra Suites Doha is one of Samrya Group’s towers in West Bay. This fully  furnished 43-storey residential tower consists of 228 apartments ranging from  1, 2 & 3 bedroom suites. The Vyra Suites is known for its luxurious amenities, hand-picked furnishing  and décor with attention to detail in every corner.",
    img:d1
  },
  {
    id:2,
    name:"THE PLAZA DOHA",
    label:"DESTINATION | HOSPITALITY | UMM GHUWALINA AREA",
    description:"The Plaza Doha posed to be a luxury development in the heart of Doha, delivering  to its visitors and residents a unique and extraordinary hospitality experience.The Plaza will offer 290 fully furnished suites and hotel serviced apartments with a  wide range of posh amenities and services, exquisite culinary concepts, an award winning spa, and state-of-the-art banqueting services.",
    img:d2
  },
  {
    id:3,
    name:"SAMRYA GARDENS DOHA",
    label:" RESIDENTIAL COMPOUND | HOSPITALTY | AL WAAB AREA",
    description:"Samrya Gardens is the flagship property development of Samrya Group renowned  for being the ideal choice for family-oriented residential communities.The Gardens has more than 150 fully furnished 2 & 3 bedroom flats with a host of  amenities, indoor and outdoor recreational services suitable for all ages.",
    img:d3
  },
  
]

const Developments = () => {
  return (
    <>
     <Navbar />
     <section className='my-16 md:mb-24 '>
      <Title title="OUR DEVELOPMENTS" />
      <div className='flex flex-col  mt-16 gap-16'>
      <div className='flex flex-col justify-between items-center'>
          <img src={mapB} alt="map" height={500} width={'65%'}/>
      </div>

      <div className='w-full px-16 md:px-44 flex flex-col gap-16'>

        {developments.map((development) => (
           <div key={development.id} className='w-[100%] flex justify-center items-center gap-16'>
           <div className='flex gap-3'>
           <div className='h-[20rem] w-3 bg-[#C5A759] transform -skew-x-12'></div>
           <div className='transform -skew-x-12'>
             <img src={d1} alt="d1" height={400} width={250}/>
           </div>
           </div>
           <div className='w-2/3 flex flex-col gap-4'>
 
             <div>
               <h1 className='text-3xl font-semibold text-left'>{development.name}</h1>
               <h4 className='text-lg font-semibold text-left text-[#B79130]'>{development.label}</h4>
             </div>
             <p className='text-xl text-left text-gray-700 leading-relaxed'>{development.description}</p>
           </div>
         </div>
        ))}
      </div>

      </div>
      </section> 
    </>
  )
}

export default Developments
