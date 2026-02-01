import React from 'react'
import MainImg from './Main.jpg'
import { useParams } from 'react-router-dom'
const Ground1 = () => {

    const param = useParams();
    console.log(param.GroundID)
  return (
    <div className='flex justify-center m-15 items-center'>
    <div className='border-4 bg-green-600/20 rounded-2xl border-green-600 flex justify-center items-center flex-col h-70 w-1/2 hover:bg-green-600/40 px-5 gap-5 transition-all duration-1500'>
        <p className='text-5xl font-bold'> {param.GroundID} Playground</p>
        <img className='h-50 w-90 rounded-2xl border-2 hover:scale-95 animate-pulse' src={MainImg} alt="" />
    </div>
    </div>
  )
}

export default Ground1