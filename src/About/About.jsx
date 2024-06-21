import React, { useEffect, useState } from 'react'
import './About.css'
import a from './Group 1.png'
import b from './Group 2.png'
import d from './g.mp4'
import e from './download.png'
import f from './e.png'
import g from './i.jpg'
import ff from './images.png'
import { TiHtml5 } from "react-icons/ti";
import { SiTailwindcss } from "react-icons/si";
import { BsFiletypeCss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiFirebase } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { FaCcStripe } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { RiFlutterFill } from "react-icons/ri";

function About() {
    // const mobileFontSize="18vh"
    const[c,setC]=useState(1);
    const [mobileFontSize, setFontSize] = useState('18vh'); // Default font size

    
    function prcli(){
        setC((prevc) => {
          // Cycle through containers 1, 2, and 3 in reverse sequence
          return prevc === 1 ? 4 : prevc - 1; // Assuming 3 containers in total
        });
      };

    function cli(){
        setC((prevc)=>{
            return prevc%4+1;
        })
    }

    useEffect(() => {
        const handleResize = () => {
          // Update font size based on window width
          const FontSize = window.innerWidth < 600 ? '8vh' : '18vh';
          setFontSize(FontSize);
        };
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Initial font size calculation
        handleResize();
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <div className="about">
         <img src={a} onClick={prcli} className='left' alt="" />
        
        <div className={`${c === 1 ? 'container' : 'no'} `}>
            <h1>ABOUT ME</h1>
            <p> <b>Greetings!</b> I'm a versatile MERN stack and full-stack React Native developer, merging my passion for creating seamless web applications with a knack for mobile development. Armed with expertise in MongoDB, Express.js, React, and Node.js, I thrive on crafting robust and scalable solutions. In the mobile domain, I excel in building cross-platform applications using React Native, ensuring a consistent user experience. As a dedicated cyber enthusiast, I navigate the ever-evolving cybersecurity landscape, implementing best practices to secure digital spaces. Beyond coding, I'm an avid learner, committed to staying ahead of emerging technologies. Let's connect and explore the possibilities of creating cutting-edge solutions together!</p>
        </div>
        <div className={`${c === 2 ? 'container' : 'no'}`}>
            <video src={d}  unmuted autoPlay loop /> 
        </div>
        <div className={`${c === 3 ? 'container' : 'no'}`}>
            <div className="wrap">
                <div className="icon-container">
                    <TiHtml5 style={{ color: 'black', fontSize: mobileFontSize }} />
                    <span className="icon-text">HTML5</span>
                </div>

                <div className="icon-container">
                    <BsFiletypeCss style={{ color: 'black', fontSize: mobileFontSize }} />
                    <span className="icon-text">CSS</span>
                </div>

                <div className="icon-container">
                    <IoLogoJavascript style={{ color: 'black', fontSize: mobileFontSize }} />
                    <span className="icon-text">JavaScript</span>
                </div>

                <div className="icon-container">
                    <FaReact style={{ color: 'black', fontSize: mobileFontSize }} />
                    <span className="icon-text">React</span>
                </div>

                <div className="icon-container">
                    <FaNode style={{ color: 'black', fontSize: mobileFontSize }} />
                    <span className="icon-text">Node.js</span>
                </div>

                <div className="icon-container">
                    <SiExpress style={{ color: 'black', fontSize: mobileFontSize }} />
                    <span className="icon-text">Express</span>
                </div>

                <div className="icon-container">
                    <BiLogoMongodb style={{ color: 'black', fontSize: mobileFontSize }} />
                    <span className="icon-text">MongoDB</span>
                </div>

                <div className="icon-container">
                    <SiFirebase style={{ color: 'black', fontSize: mobileFontSize }} />
                    <span className="icon-text">Firebase</span>
                </div>

                <div className="icon-container">
                    <FaPython style={{ color: 'black', fontSize: mobileFontSize }} />
                    <span className="icon-text">Python</span>
                </div>

                <div className="icon-container">
                    <FaJava style={{ color: 'black', fontSize: mobileFontSize }} />
                    <span className="icon-text">Java</span>
                </div>

                <div className="icon-container">
                    <SiMysql style={{ color: 'black', fontSize: mobileFontSize }} />
                    <span className="icon-text">MySQL</span>
                </div>

                <div className="icon-container">
                    <SiTailwindcss style={{ color: 'black', fontSize: mobileFontSize }} />
                    <span className="icon-text">Tailwind CSS</span>
                </div>

                <div className="icon-container">
                    <TbBrandReactNative style={{ color: 'black', fontSize: mobileFontSize }} />
                    <span className="icon-text">React Native</span>
                </div>

                <div className="icon-container">
                    <FaFigma style={{ color: 'black', fontSize: mobileFontSize }} />
                    <span className="icon-text">Figma</span>
                </div>
            </div>
        </div> 
        <div className={`${c === 4 ? 'container' : 'no'} `}>
        <h1 style={{fontSize:'50px',fontWeight:"300"}}>What i do</h1>
            <div className="skillll">
            
            <div className="boxc">
                <h1>UX/US</h1>
                <img src={e} alt="" />
            </div>
            <div className="boxc">
                <h1>WEB/MERN Development</h1>
                <img src={f} alt="" />
            </div>
            <div className="boxc">
                <h1>App Development</h1>
                <img src={g} alt="" />
            </div>
            <div className="boxc">
                <h1>Qa Testing</h1>
                <img src={ff} alt="" />
            </div>
            </div>
            

        </div>
        
        <img src={b} onClick={cli} className='right' alt="" /> 
    </div>
  )
}

export default About