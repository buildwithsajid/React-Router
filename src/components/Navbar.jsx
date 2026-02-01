import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-5 bg-cyan-950 items-baseline-last h-auto'>
      <h2 className='font-bold text-4xl animate-bounce'>React Routing Advance</h2>

      <div className='flex gap-5 p-3 border-2 rounded-full'>
        <Link to={'/BRouter'}><button className='border-2 p-2 rounded-3xl bg-green-950/50 text-white font-bold border-white'>Browser-Router</button></Link>
        <Link to={'/MRouter'}><button className='border-2 p-2 rounded-3xl bg-blue-800/50 text-white font-bold border-white'>Memory-Router</button></Link>
        <Link to={'/Hrouter'}><button className='border-2 p-2 rounded-3xl bg-green-700/50 text-white font-bold border-white'>Hash-Router</button></Link>
        <Link to={'/Rules'}><button className='border-2 p-2 rounded-3xl bg-emerald-700/50 text-white font-bold border-white'>Rules</button></Link>
        <Link to={'/Playground'}><button className='border-2 p-2 rounded-3xl bg-orange-400/60 border-orange-500 text-white font-bold'>Playground</button></Link>
      </div>
    </div>
  )
}

export default Navbar