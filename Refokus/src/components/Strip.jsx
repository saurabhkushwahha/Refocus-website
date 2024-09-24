import React from 'react'

function Strip({data}) {
  return (
    <div className='w-[16.66%]  py-2 flex items-center justify-between  px-2 border-b-[1px] border-t-[1px] border-r-[1px] border-zinc-700/70'>
      <img src={data.url} alt="image" className='invert '/>
      <span className='text-xl font-extrabold text-zinc-400 '>{data.number}</span>
    </div>
  )
}

export default Strip