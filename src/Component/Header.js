import React, { useLayoutEffect, useState } from 'react'
import { ExternalLink } from 'react-external-link'
import { FaBars } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {  NavLink } from 'react-router-dom'
import '../css/header.css'
import {  setOff, setOn } from '../redux/headerSlice'
export default function Header() {
  const [privte , setPrivte] =useState(true) 
  const [business , setBusiness] =useState(true) 
  const [mob , setMob] =useState(true) 
  const {lang} = useSelector((state)=>state.langHandl)
  const dispatch = useDispatch();
  useLayoutEffect(()=>{
    let list = document.querySelectorAll("a");
    list.forEach(function (e) {
      e.onclick = function(){
        list.forEach(function (e){
          e.classList.remove("active");
        });
        e.classList.add("active");
      };
    })

  },)
  const handlPrOn =()=>{
    setPrivte(false)
  }
  const handlPrOff =()=>{
    setPrivte(true)

  }
  const handlBuOn =()=>{
    setBusiness(false)
  }
  const handlBuOff =()=>{
    setBusiness(true)

  }
  const handlLang=()=>{
    if(lang===true){
      dispatch(setOn())
    }
    if(lang===false){
      dispatch(setOff())
    }
    
    
  }
  const handelIcon=()=>{
    setMob(!mob)
  }
  return (
    
    <div className='header'>
      <div className='video'>
          <video muted autoPlay playsInline loop typeof='video/mp4'  width="100%">
          <source src="https://f.hubspotusercontent20.net/hubfs/9490826/SWVL%20-%20Amended%20Graded.mp4" className='classVideo' type="video/mp4"/>
         </video>
      </div>
      <div className='navCon'> 
      <div className='nav'>
        <div className='img'><img src='https://www.swvl.com/hubfs/raw_assets/public/Swvl_July2021/images/Header_logo.svg' alt='swvl' title='swvl' /></div>
        <nav className='navMenu'>
          <NavLink to=""  className="menu">HOME</NavLink>
          <NavLink to="/daily" className="menu">DAILY</NavLink>
          <NavLink to="/travel" className="menu">TRAVEL</NavLink>
          <NavLink to="/ptivate-bus" className="menu" onMouseMove={handlPrOn} onMouseLeave={handlPrOff}> <div className={privte ? "prOff" : "prOn"}><span to="">Egypt</span><span to="">PAKISTAN</span></div>PRIVATE BUS</NavLink>
          <NavLink to="/business" className="menu" onMouseMove={handlBuOn} onMouseLeave={handlBuOff}> <div className={business ? "prOff" : "prOn"}><span to="">BLOG</span></div> BUSINESS</NavLink>
          <NavLink to="/captains" className="menu">CAPTAINS</NavLink>
          <NavLink to="/people" className="menu">PEOPLE</NavLink>
          <NavLink to="/investors" className="menu">INVESTORS</NavLink>
          <NavLink to="/app" className="menu">APP</NavLink>
          <button className="lang" onClick={handlLang}>ENGLISH <div className={lang ? "langOff" : "langOn"}><p>English</p> <p>Español</p> <p>Arabic</p></div></button>
        </nav>
        
          <div className='icon' onClick={handelIcon}>
              <div
               className='faIcon'><FaBars />
                </div>
          
            
        </div>
        
      </div>
      <div className={mob ? "barOff" : "barOn"}>
                <div className='top'>
                  <NavLink to=""  className="menu">HOME</NavLink>
                  <NavLink to="/daily" className="menu">DAILY</NavLink>
                  <NavLink to="/travel" className="menu">TRAVEL</NavLink>
                  <NavLink to="/ptivate-bus" className="menu">PRIVATE BUS</NavLink>
                </div>
                <div className='down'>
                <NavLink to="/business" className="menu">BUSINESS</NavLink>
                <NavLink to="/captains" className="menu">CAPTAINS</NavLink>
                <NavLink to="/people" className="menu">PEOPLE</NavLink>
                <NavLink to="/investors" className="menu">INVESTORS</NavLink>
                <NavLink to="/app" className="menu">APP</NavLink>
                </div>
                <button>ENGLISH</button>
            </div>
      </div>
      <div className='footer'>
        <ExternalLink  href="https://apps.apple.com/app/id1214486024?mt=8" target="_blank" rel="noreferrer">DOWNLOAD</ExternalLink >
      </div>
    </div>
  )
}
