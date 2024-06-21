import React, { useState } from 'react'
import './Skills.css'
import a from './download.jpg'
import b from './images.jpg'
import dd from './Group 1.png'
import d from './Group 2.png'
import Certification from './Certification'

function Skills() {
    const[c,setC]=useState(1);
    function cli(){
        setC((prevc)=>{
            return prevc%3+1;
        })
    }
  return (
    <div className="skills">
        <img className='ll' onClick={cli} src={d} alt="" />
        {/* <img className='rr' src={c} alt="" /> */}
        <div className={`${c === 1 ? 'container' : 'no'} `}>
            <h1 className='hi'>Education</h1>
            <div className="box">
                <div className="left">
                    <img src={a} alt="" />
                </div>
                <div className="right">
                    <div className="text">
                    <h1>GAES,Sharjah(2006-2021)</h1>
                    <span>10+12th</span>
                    </div>
                    <p>In my 11th and 12th years at a CBSE school, I enthusiastically embraced the world of computer mathematics, cultivating a passion for analytical thinking and problem-solving. Simultaneously, I held the esteemed role of a student committee member, serving as a prefect. This experience not only polished my leadership skills but also instilled in me a deep sense of responsibility and the importance of effective teamwork. Beyond academics, my journey has been enriched by my strong communication skills and an innate ability to adapt seamlessly to various nationalities. This versatility in communication has proven to be a valuable asset, facilitating collaboration and understanding in diverse environments.</p>
                </div>
            </div>
            <div className="box">
                <div className="left">
                    <img src={b} alt="" />
                </div>
                <div className="right">
                    <div className="text">
                    <h1>VIT Bhopal(2021-)</h1>
                    <span>BTECH in CS with specialization in Cyber Security and Digital Forensics</span>
                    </div>
                    <p>My college journey was a transformative experience, where I specialized in cybersecurity and digital forensics, delving into the intricacies of securing digital landscapes and investigating cyber threats. Alongside this, I immersed myself in the world of Java, expanding my programming expertise. Beyond the academic realm, my college years were a crucible for personal and professional growth. Engaging in various projects and coursework not only deepened my technical knowledge but also provided a platform for developing leadership and communication skills. These invaluable attributes, coupled with a solid foundation in cybersecurity and Java, have equipped me to navigate the complexities of the ever-evolving tech industry with confidence and adaptability.</p>
                </div>
            </div>
        </div>


        <div className={`${c === 2 ? 'container2' : 'no'} `}>
            <h1 className='hi2'>CERTIFICATIONS</h1>
            <Certification/>            
        </div>
        <div className={`${c === 3 ? 'container3' : 'no'} `}>
            <h1>Qualities</h1>
            <div className="res">
                <span >Responsible</span>
                <span>Creative</span>
                <span>Hardworker</span>
                <span>Punctual</span>
                
                <span>Adaptive</span>
                <span>Team Worker</span>
                <span>Time Keeper</span>
                <span>Leadership</span>
                <span>Problem Solver</span>
                <span>Communication</span>
                <span>Flexible</span>
                <span>Decision Making</span>
                <span>Googling</span>
                <span>AI Prompting</span>
            </div>
        </div>
    </div>
  )
}

export default Skills