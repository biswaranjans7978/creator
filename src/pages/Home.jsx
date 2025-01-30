import React from 'react'
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import EquipmentCard from '../components/EquipmentCard';
import author1 from "../assets/images/banner.jpg"
import author2 from "../assets/images/cemra.jpg"
import author3 from "../assets/images/videocamera.jpg"


function Home() {
  return (
    <div>
     <Header/>
     
      <section className="mt-4">
        <div className="relative rounded-lg overflow-hidden mx-4">
          <img
            src={author1}
            alt="Studio Equipment Banner"
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <h2 className="text-white text-lg font-bold">BUY STUDIO EQUIPMENT</h2>
            <p className="text-green-400 text-xl">80% OFF</p>
            <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">Check this out</button>
          </div>
        </div>
      </section>
      
      <section className="mt-6mx-4">
        <div className="">
          <CategoryCard/>
        </div>
      </section>
      
      <section className="mt-6 mx-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Equipments</h2>
          <a href="#" className="text-blue-500 text-sm">See More</a>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
         <EquipmentCard title="Mirrorless Camera" price="$69.69" img={author2}/>
         <EquipmentCard title="MICROPHONE" price="$69.69" img={author3}/>
         <EquipmentCard title="MICROPHONE" price="$69.69" img={author3}/>
         <EquipmentCard title="MICROPHONE" price="$69.69" img={author3}/>
         <EquipmentCard title="MICROPHONE" price="$69.69" img={author3}/>
        </div>
      </section>
    </div>
  );
}

export default Home