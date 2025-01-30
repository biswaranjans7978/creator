import React from 'react'
import { Link } from 'react-router-dom'
import { BsCameraReels } from "react-icons/bs";
import { IoMdFlashlight } from "react-icons/io";
import { CiMicrophoneOn } from "react-icons/ci";
import { LuLamp } from "react-icons/lu";

function CategoryCard() {
  return (
    <div className="flex flex-col items-center bg-red p-4 rounded-lg shadow-sm mt-4">
      <div className=" w-full h-20 bg-pink-100 rounded-full flex justify-center gap-4 pt-4">
        <div className=''><Link><BsCameraReels className=' h-8 w-8 ml-2 text-blue-600'/>Camera</Link></div>
        <div><Link><IoMdFlashlight className=' h-8 w-8 ml-2 text-pink-700' />Lights</Link></div>
        <div><Link><CiMicrophoneOn className=' h-8 w-8 ml-6 text-green-700' />Microphone</Link></div>
        <div><Link><LuLamp className=' h-8 w-8 ml-2 text-orange-500' />Accessories</Link></div>
      </div>
    </div>
  )
}

export default CategoryCard