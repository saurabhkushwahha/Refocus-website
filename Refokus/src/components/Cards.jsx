import React from 'react'
import Card from './Card'
function Cards() {
  return (
    <div className='w-full bg-zinc-900 py-14'>
      <div className='max-w-screen-xl  mx-auto h-[29rem] flex gap-2 '>
         <Card  index={0} start={false} para={true} headingText="Work"/>
         <Card index={1} start={true} para={false} headingText="Get in Touch" hover="true"/>
      </div>
      </div>
  )
}

export default Cards