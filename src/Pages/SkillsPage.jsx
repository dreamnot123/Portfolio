import React from 'react'
import Navbar from '../Navbar/Navbar'
import Skills from '../Skills/Skills'

function SkillsPage() {
  return (
    <div style={{display:"flex",flexDirection:"row",background:"#D9D9D9"}}>
        <Navbar/>
        <Skills/>
    </div>
  )
}

export default SkillsPage