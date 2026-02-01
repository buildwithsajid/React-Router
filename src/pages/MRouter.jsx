import React from 'react'

const MRouter = () => {
  return (
    <div className='flex justify-center m-15 items-center'>
    <div className='border-4 bg-blue-600/20 rounded-2xl border-blue-600 flex justify-center items-center flex-col h-70 w-1/2 hover:bg-blue-600/40 px-5 gap-5 transition-all duration-1500'>
        <p className='text-5xl font-bold'>MemoryRouter</p>
        <h1 className='text-2 font-extralight'>MemoryRouter is a type of router provided by React Router that manages routing internally within a React application without manipulating the browser's URL. It is used when you want to handle routing within your application's state or memory, making it suitable for scenarios like testing or isolated UI components. MemoryRouter keeps track of the route location and history internally using React's state management, without relying on the browser's URL.</h1>
    </div>
    </div>
  )
}

export default MRouter