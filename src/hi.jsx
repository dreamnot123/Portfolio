// npm install assemblyai



// const client = new AssemblyAI({
//   apiKey: "706adce47ca84bdab01f0c7600dc5ac5"
// })

// const audioUrl =
//   'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3'

// const config = {
//   audio_url: audioUrl
// }

// const run = async () => {
//   const transcript = await client.transcripts.create(config)
//   console.log(transcript.text)
// }

// run()

import React from 'react'
import { AssemblyAI } from 'assemblyai'

function hi (){
    const client = new AssemblyAI({
        apiKey: "706adce47ca84bdab01f0c7600dc5ac5"
      })
      
      const audioUrl =
        'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3'
      
      const config = {
        audio_url: audioUrl
      }
      
      const run = async () => {
        const transcript = await client.transcripts.create(config)
        console.log(transcript.text)
      }
  return (
    <div onClick={run}>
        <button>hi</button>
    </div>
  )
}

export default hi