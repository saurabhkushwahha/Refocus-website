import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useState } from 'react'

function Work() {
  const { scrollYProgress } = useScroll()
  const [image, setImage] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8816e60550876d3d56e_Cula-%2016%209%20(A)-p-1080.webp", top: "60%", left: "50%", isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d42ab3e32fee7e9535ae_BCGP%20-%2016%209%20(A)-p-1080.webp", top: "62%", left: "60%", isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8682a7bae884b4a8177_Arqitel%20-%2016%209%20(A)-p-1080.webp", top: "48%", left: "48%", isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d2ddf87035c200c92a17_SevDesk%20-%2016%209%20(A)-p-1080.webp", top: "68%", left: "43%", isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d004a2b3d07347ec471a_Brightwave%20-%2016%209%20(A)-p-1080.webp", top: "79%", left: "50%", isActive: false,
    }
  ])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    showHiddenImages(Math.floor(latest * 100))
  })
  function show(arr) {
     setImage(prev=>(
      prev.map((item,index)=>(
         arr.indexOf(index)==-1 ? ({...item, isActive:false}) : ({...item,isActive:true})
      ))
     ))
  }
  function showHiddenImages(scrollval) {
    switch (scrollval) {

      case 0:
        show([])
        break;

      case 1:
        show([0])
        break;

      case 2:
        show([0, 1])
        break;

      case 3:
        show([0, 1, 2])
        break;

      case 4:
        show([0, 1, 2, 3])
        break;

      case 5:
        show([0, 1, 2, 3, 4])
        break;
    }
  }

  return (
    <div className='w-full'>
      <div className=' relative max-w-7xl mx-auto text-center select-none'>
        <h1 className='text-medium text-[30vw] text-center leading-none tracking-tight '>work</h1>

        <div className=' w-full h-full  absolute top-0 left-0'>
          {image.map((elem, index) => (
            elem.isActive && (
              <img key={index} style={{ top: elem.top, left: elem.left }} src={elem.url} alt="" className='w-60 h-60  rounded-lg object-cover -translate-x-[50%] -translate-y-[50%] bg-lime-400 absolute' />
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work