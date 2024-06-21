import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { IoHome } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiStackFill } from "react-icons/ri";
import { GiGraduateCap } from "react-icons/gi";
import { IoMail } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/"><IoHome/></Link></li>
        <li><Link to="/about"><IoPersonCircleOutline/></Link></li>
        <li><Link to="/project"><RiStackFill/></Link></li>
        <li><Link to="/education"><GiGraduateCap/></Link></li>
        <li><Link to="/contact-me"><IoMail/></Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
