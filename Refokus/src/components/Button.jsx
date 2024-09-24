import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
function Button({title="Get started"}) {
  return (

      <button className='min-w-28 px-8 py-2  flex items-center justify-center gap-5 text-sm bg-slate-100 text-zinc-900 shadow-xl rounded-full'>
           <span className='text-sm font-regular'>{title}</span>
           <BsArrowReturnRight size={15} className='mt-1 font-extrabold'/>
      </button>
  )
}

export default Button