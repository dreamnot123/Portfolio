import React, { useState } from 'react'
import './Contact.css'
import a from './images.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";




function Contact() {
    const resetForm = () => {
        Setfname('');
        SetLname('');
        Setemail('');
        Setmessage('');
      };
    const a=()=>{
        alert("Please connect with me using my socials for contacting me ")
        resetForm();
    }
    const [fname,Setfname]=useState("");
    const [Lname,SetLname]=useState("");
    const [email,Setemail]=useState("");
    const [message,Setmessage]=useState("");
    

  return (
    <div className="contact">
        <h1>CONTACT<p className='pp'>(Use my Socials to connect with me easily)</p></h1>
        {/* <div className="container"> */}
            <div className="right">
                <div className="first">
                    <div className="l">
                        <label>First Name:</label>
                        <input type="text" placeholder='Enter Name...'  value={fname} onChange={(e)=>Setfname(e.target.value)}/>
                    </div>
                    <div className="r">
                        <label >Last Name:</label>
                        <input type="text"  placeholder='Enter Last Name...' value={Lname} onChange={(e)=>SetLname(e.target.value)}/>
                    </div>
                </div>
                <div className="email">
                    <label >Email:</label>
                    <input type="email" placeholder='Enter Email...' value={email}  onChange={(e)=>Setemail(e.target.value)} />
                </div>
                <div className="text">
                    <label >Message:</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message' value={message} onChange={(e)=>Setmessage(e.target.value)}></textarea>
                </div>
                <button onClick={a}>Submit</button>
                <div className="icons">
                    <div className="icon"><a href='http://localhost:3000/contact-me'><SiLeetcode style={{fontSize:"4vh"}}/></a></div>
                    <div className="icon"><a href='https://github.com/EDBOZY'><FaGithub style={{fontSize:"4vh"}}/></a></div>
                    <div className="icon"><a href='https://www.linkedin.com/in/bentomabey/'><FaLinkedin style={{fontSize:"4vh"}}/></a></div>
                    <div className="icon"><a href="https://auth.geeksforgeeks.org/user/bentomadb9f/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"><SiGeeksforgeeks style={{fontSize:"4vh"}}/></a></div>
                    <div className="icon"><a href="mailto:bentomabey12@gmail.com"><BiLogoGmail style={{fontSize:"4vh"}}/></a></div>

                </div>
            </div>
        {/* </div> */}
    </div>
  )
}

export default Contact