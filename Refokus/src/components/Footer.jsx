import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-zinc-900 '>
        <div className='max-w-screen-xl flex  mx-auto'>
          <div className='basis-1/2 flex flex-col '>
              <h1 className='text-[11.5rem] font-semibold tracking-tighter '>refokus.</h1>
              <div className='w-full text-sm flex gap-10 mb-5'>
              {["Privacy Policy","Cookies Policy","Terms","Webflow Agency"].map((item,index)=>(
                <a href='#' key={index} className='text-zinc-500 font-semibold'>{item}</a>
              ))}
              </div>
          </div>
          <div className='basis-1/2 flex '>

          <div className='basis-1/3 flex flex-col  justify-center px-4 gap-1'>
               <h1 className='text-zinc-400 font-semibold mb-2'>Socials</h1>
               {["Instagram","Twitter","Linkedin"].map((item,index)=><a href='#' className='font-semibold text-sm text-zinc-500' key={index}>{item}</a>)}
          </div>
          <div className='basis-1/3 flex flex-col  justify-center px-4 gap-1'>
               <h1 className='text-zinc-400 font-semibold mb-2'>Socials</h1>
               {["Instagram","Twitter","Linkedin"].map((item,index)=><a href='#' className='font-semibold text-sm text-zinc-500' key={index}>{item}</a>)}
          </div>
          <div className='basis-1/3  flex flex-col items-end justify-center px-3 gap-1'>
          <p className='text-sm text-zinc-500 text-end' >Refokus is a top Webflow Agency combining high-end design with Webflow Development expertise.</p>
          <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" className='w-72 mt-5 h-auto' alt="" />
          </div>

          </div>
        </div>
    </div>
  )
}

export default Footer