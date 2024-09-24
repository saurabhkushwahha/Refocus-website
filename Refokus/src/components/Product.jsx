import React from 'react'
import Button from './Button'

function Product({data,index,handlehover,handleleave}) {
  const {title, desc,live,casestudy}=data;
  return (
    <div
    onMouseEnter={()=>handlehover(index)}
    onMouseLeave={()=>handleleave(index)}
     className='w-full mt-10 px-20 py-2 flex items-center justify-between'>
          <h1 className='text-7xl font-medium'>{title}</h1>
          <div className='max-w-[25rem] p-2 '>
            <p className='text-md font-light mb-5'>{desc}</p>
            <div className='flex items-center gap-10'>
              {live && (<Button title='Get started'/>)}
              {casestudy && (<Button title='Case study'/>)}
            </div>
          </div>
    </div>
  )
}

export default Product