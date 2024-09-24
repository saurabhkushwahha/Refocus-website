import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import React from 'react'

function Marquee({ imageurls,direction }) {
  return (
    <div

      className='w-full flex gap-10 overflow-hidden'>

      <motion.div
        initial={{ x: direction=="left" ? "0%" : "-100%"  }}
        animate={{ x: direction=="left" ? "-100%":"0%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 25 }}
        className='flex flex-shrink-0 gap-14 py-8'>
        {imageurls.map((item, index) => (
          <img src={item} key={index} alt='image' className='invert ' />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction=="left" ? "0%" : "-100%"}}
        animate={{ x: direction=="left"  ? "-100%":"0%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 25 }}
        className='flex flex-shrink-0 gap-14 py-8'>
        {imageurls.map((item, index) => (
          <img src={item} key={index} alt='image' className='invert ' />
        ))}
      </motion.div>

    </div>
  )
}

export default Marquee