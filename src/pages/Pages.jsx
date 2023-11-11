import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Details from './Details'
import { Route,Routes, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


function Pages() {

  const location=useLocation();
  return (
    <AnimatePresence location={location} key={location.pathname} >
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cuisine/:type" element={<Cuisine></Cuisine>}></Route>
      <Route path="/searched/:search" element={<Searched></Searched>}></Route>
      <Route path="/details/:name" element={<Details></Details>}></Route>
    </Routes>
    </AnimatePresence>
    
  )
}

export default Pages
