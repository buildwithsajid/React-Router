import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  let navigate = useNavigate()
  return (
    <div className='flex items-center flex-row bottom-0 fixed left-0 text-center justify-center w-full bg-cyan-900'>
      <button className='text-xl font-bold rounded-full bg-red-600 py-2 px-4 active:scale-90 m-3'
        onClick={() => {
          navigate('/BRouter')
        }} >Back to home</button>
      <button className='text-xl font-bold rounded-full bg-red-600 py-2 px-4 active:scale-90 m-3'
        onClick={() => {
          navigate(-1)
        }} >Back</button>
      <button className='text-xl font-bold rounded-full bg-red-600 py-2 px-4 active:scale-90 m-3'
        onClick={() => {
          navigate(+1)
        }} >Forward</button>
    </div>
  )
}

export default Footer