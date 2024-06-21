import React from 'react'
import Project from '../Project/Project'
import Navbar from '../Navbar/Navbar'


function ProjectPage() {
  return (
    <div style={{display:"flex",flexDirection:"row",background:"#D9D9D9"}}>
        <Navbar/>
        <Project/>
    </div>
  )
}

export default ProjectPage