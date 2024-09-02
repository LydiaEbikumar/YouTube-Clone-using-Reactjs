import React from 'react';
import { FaHome, FaUser, } from 'react-icons/fa';
import { SiYoutubeshorts } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import './App.css'; 

const Menu = () => {
  return (
        
        <div className="vertical-menu">
            <div className="logo">
          <span className="icon" style={{marginLeft:"20%"}}><AiOutlineMenu /></span>
          <span className="icon" style={{marginLeft:"20%",fontSize:"50px",color:"red"}}><IoLogoYoutube /></span>
          <span style={{fontSize:"30px",fontWeight:"bold"}}>YouTube</span>
            </div>
            <a href="#home" className="menu-item"><FaHome /></a>
            <a href="#profile" className="menu-item"><FaUser /></a>
            <a href="#profile" className="menu-item"><SiYoutubeshorts /></a>
            <a href="#profile" className="menu-item"><SiYoutubemusic /></a>
            <a href="#profile" className="menu-item"><MdOutlineWatchLater /></a>
           
        </div>
    );
};

export default Menu;

