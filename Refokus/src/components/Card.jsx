import { motion } from 'framer-motion';
import React from 'react'
import { HiMiniArrowLongRight } from "react-icons/hi2";
function Card({index,start,para,headingText,hover="false"}) {
  return (
    <motion.div
    whileHover={{backgroundColor: hover=="true" && "#7443ff", padding:"25px"}}

    className={`w-full  rounded-md p-5 bg-zinc-800 ${index==0? "basis-1/3":"basis-2/3"}`}>
      <div className='w-full h-full flex flex-col justify-between  '>
       <div className='flex items-center justify-between w-full'>
        <h3 className='text-lg font-regular'>{headingText}</h3>
        <HiMiniArrowLongRight size={22}/>
       </div>
        <div>
          {start && (
        <>
        <h1 className='text-8xl tracking-tighter leading-none mb-4 font-medium'>Start a Project</h1>
        <button className='border  py-2 px-5 rounded-full text-sm'>Contact us</button>
        </>
          )}
          {para && (
        <p className='text-md tracking-tight leading-none text-gray-300'>Lorem ipsum dolor sit amet consectetur.</p>
          )}
        </div>


      </div>
    </motion.div>
  )
}

export default Card