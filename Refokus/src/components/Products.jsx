import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
function Products() {
  const data = [
    {
      title: "Arqitel",
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8682a7bae884b4a8177_Arqitel%20-%2016%209%20(A)-p-1080.webp",
      desc: "Our mission is to provide a seamless experience, whether you're here to explore our latest offerings or discover new solutions tailored just for you. We prioritize user-friendly design and cutting-edge technology to ensure you get the best of both worlds.",
      live: true,
      casestudy: false,

    },
    {
      title: "TTR",
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d2ddf87035c200c92a17_SevDesk%20-%2016%209%20(A)-p-1080.webp",
      desc: "Our mission is to provide a seamless experience, whether you're here to explore our latest offerings or discover new solutions tailored just for you. We prioritize user-friendly design and cutting-edge technology to ensure you get the best of both worlds.",
      live: true,
      casestudy: false,

    },
    {
      title: "YIR 2002",
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d42ab3e32fee7e9535ae_BCGP%20-%2016%209%20(A)-p-1080.webp",
      desc: "Our mission is to provide a seamless experience, whether you're here to explore our latest offerings or discover new solutions tailored just for you. We prioritize user-friendly design and cutting-edge technology to ensure you get the best of both worlds.",
      live: true,
      casestudy: true,

    },
    {
      title: "Yahoo!",
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8816e60550876d3d56e_Cula-%2016%209%20(A)-p-1080.webp",
      desc: "Our mission is to provide a seamless experience, whether you're here to explore our latest offerings or discover new solutions tailored just for you. We prioritize user-friendly design and cutting-edge technology to ensure you get the best of both worlds.",
      live: true,
      casestudy: false,

    },
  ]
  const [pos, setPos] = useState(0)
  const handlehover = (pindex) => {
    setPos(pindex * 16)
  }
  const handleleave=(index)=>{

  }
  return (
    <div className=' my-52 w-full bg-zinc-900'>
      <div className='relative max-w-7xl  mx-auto'>
        {data.map((item, index) => (
          <Product key={index} data={item} index={index} handlehover={handlehover} handleleave={handleleave} />
        ))}
        <div className='absolute  top-0 w-full h-full pointer-events-none '>
          <motion.div
            initial={{ y: pos, x: "-50%" }}
            animate={{ y: pos + `rem` }}
            className='window w-[20rem] h-[16rem] overflow-hidden  translate-y-[48rem]  rounded-md absolute left-[44%] '>

            {data.map((item, index) => (
              <motion.div key={index}
                animate={{ y: -pos + `rem` }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className='w-full h-full'>
                <img src={item.url} alt="" className='w-full h-full' />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Products