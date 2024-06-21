import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'

function HomePage() {
  return (
    <div style={{display:"flex",flexDirection:"row",background:"#D9D9D9"}}>
        <Navbar/>
        <Home/>
    </div>
  )
}

export default HomePage