import React from 'react'
import './Home.css'
import a from './1703673213433.jpg'
import { Link } from 'react-router-dom';
import ReactTyped from 'react-typed';

function Home() {

      const handlePreview = () => {
        const fileUrl = 'https://docs.google.com/document/d/1J5gkwtfBY-xN7yQAOVReFIpDKstjoQ5mYdd-h2b9_CA/edit?usp=sharing';
        window.open(fileUrl, '_blank');
      };
      const typedTextStyle = {
        fontSize: "60px", // Adjust the font size here as needed
        color: "black",
        fontWeight:"bold"    // Adjust the text color here as needed
      };
      const smallerScreenStyle = {
        '@media (max-width: 768px)': {
          fontSize: '500px' // Reduce font size on smaller screens
        }
      };
      
  return (
    <div className="home">
        <div className="container">
            <div className="left">
                <div className="box">
                    <img src={a} alt="" />
                </div>
                {/* <div className="boxb"></div> */}
            </div>
            <div className="right">
            <div>
                <ReactTyped className='dd'
                    strings={["Hi I am Ben Tom Abey"]}
                    typeSpeed={100}
                    loop
                    style={{ ...typedTextStyle, ...smallerScreenStyle }}
                    />
            </div>
                {/* <h1>Ben Tom Abey</h1> */}
                {/* <div className="typing-container">
                  <div className="typing-name">
                    <span>Ben Tom Abey</span>
                    <div className="cursor"></div>
                  </div>
                </div> */}
                <span className='span'>Front-End Developer,Full Stack React Native Developer & a Cyber Enthusiast</span>
                <span className='span'>I like to keep everything simple and easy</span>
                <div className="buttons">
                    <button onClick={handlePreview}> RESUME</button>
                    <button><Link className='lonk' to="/contact-me" style={{color:"black"}}>Hire Me</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home