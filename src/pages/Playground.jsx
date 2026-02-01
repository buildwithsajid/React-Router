import React from 'react'
import { useParams } from 'react-router-dom'

const Playground = () => {

   
  return (
    <div className='flex justify-center m-15 items-center'>
    <div className='border-4 bg-green-600/20 rounded-2xl border-green-600 flex justify-center items-center flex-col h-70 w-1/2 hover:bg-green-600/40 px-5 gap-5 transition-all duration-1500'>
        <p className='text-5xl font-bold'>Playground</p>
        <h1 className='text-2 font-extralight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia cum amet, eaque nostrum enim aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magni quasi enim eius. Quas beatae blanditiis asperiores saepe. Esse non accusantium perferendis deleniti inventore, voluptates beatae veniam vitae minima? Dolore!</h1>
    </div>
    </div>
  )
}

export default Playground