import React from 'react'
import Project from '../Project/Project'
import Navbar from '../Navbar/Navbar'
import Contact from '../Contact/Contact'
// import { AssemblyAI } from 'assemblyai'


function ProjectPage() {
  // const client = new AssemblyAI({
  //   apiKey: "706adce47ca84bdab01f0c7600dc5ac5"
  // })
  
  // const audioUrl =
  //   'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3'
  
  // const config = {
  //   audio_url: audioUrl
  // }
  
  // const run = async () => {
  //   const transcript = await client.transcripts.create(config);
  //   console.log(transcript.text);
  //   console.log("hi")
  // };
  return (
    <div style={{display:"flex",flexDirection:"row",background:"#D9D9D9"}}>
      {/* <button onClick={run}>hi</button> */}
      <Navbar/>
      {/* <Project/> */}
      <Contact/>
    </div>
  )
}

export default ProjectPage