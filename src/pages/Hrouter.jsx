import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hrouter = () => {

  let navigate = useNavigate()

  return (
    <div className='h-full relative bg-black w-full left-0 right-0 min-h-screen'>
      <div className='flex justify-center m-15 items-center top-0 absolute'>
        <div className='border-4 bg-amber-600/20 rounded-2xl border-amber-600 flex justify-center items-center flex-col h-70 w-1/2 hover:bg-amber-600/40 px-5 gap-5 transition-all duration-1500'>
          <p className='text-5xl font-bold'>HashRouter</p>
          <h1 className='text-2 font-extralight'>HashRouter is a component of the React Router library that enables client-side routing using the hash portion of the URL (e.g., http://example.com/#/about). This approach does not require server-side configuration, making it ideal for static sites or environments where you don't control the server's routing.</h1>
        </div>
      </div>
    </div>
  )
}

export default Hrouter