import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import BRouter from './pages/BRouter'
import MRouter from './pages/MRouter'
import Hrouter from './pages/Hrouter'
import NotFound from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import Rules from './pages/Rules'
import BRRules from './pages/BRRules'
import MRRules from './pages/MRRules'
import HRRules from './pages/HRRules'
import Playground from './pages/Playground'
import Ground1 from './pages/Ground1'

const App = () => {
  return (
    <div className='bg-black h-lvh text-white'>
    <Navbar/>
    <Routes>
      <Route path='/BRouter' element={<BRouter/>}/>
      <Route path='/MRouter' element={<MRouter/>}/>
      <Route path='/Hrouter' element={<Hrouter/>}/>
      <Route path='Playground' element={<Playground/>}/>
      <Route path='/Playground/:GroundID' element={<Ground1/>}/>
      <Route path='/Rules' element={<Rules/>}>
      <Route path='BRRules' element={<BRRules/>}/>
      <Route path='MRRules' element={<MRRules/>}/>
      <Route path='HRRules' element={<HRRules/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App