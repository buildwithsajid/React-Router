import React from 'react'

const NotFound = () => {
  return (
    <div className='flex justify-center mt-30 items-center'>
    <div className='border-4 bg-red-600/20 rounded-2xl border-red-600 flex justify-center items-center flex-col h-50 w-100 gap-10 animate-pulse hover:bg-red-600/50'>
        <p className='text-7xl font-bold'>Error 404</p>
        <h1 className='text-3xl font-semibold underline'>Page not found</h1>
    </div>
    </div>
  )
}

export default NotFound