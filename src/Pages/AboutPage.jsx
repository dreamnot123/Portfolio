import React from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'

function AboutPage() {
  return (
    <div style={{display:"flex",flexDirection:"row",background:"#D9D9D9"}}>
        <Navbar/>
        <About/>
    </div>
  )
}

export default AboutPage