import React from 'react'
import {FaFacebookSquare ,FaLinkedinIn ,FaTwitter} from 'react-icons/fa'
import {AiFillInstagram ,AiFillYoutube} from 'react-icons/ai'
import '../css/footer.css'
import { ExternalLink } from 'react-external-link'
export default function Footer() {
  return (
    <div className='footerEnd'>
      <div className='left'>
        <div className='links'>
          <h2>DOWNLOAD APP</h2>
          <div className='photos'>
          <ExternalLink  href="https://play.google.com/store/apps/details?id=io.swvl.customer&amp;hl=en&amp;gl=US" target="_blank" rel="noreferrer"><img src="https://www.swvl.com/hubfs/raw_assets/public/Swvl_July2021/images/google-play.svg" width="384" alt="Play store" title="Play store" /></ExternalLink >
          <ExternalLink  href="https://apps.apple.com/eg/app/swvl-bus-booking-app/id1214486024" target="_blank" rel="noreferrer"><img src="https://www.swvl.com/hubfs/raw_assets/public/Swvl_July2021/images/apple-store.svg" width="384" alt="App store" title="App store"/></ExternalLink >
          <ExternalLink  href="https://appgallery.huawei.com/#/app/C100242771" target="_blank" rel="noreferrer"><img src="https://www.swvl.com/hubfs/raw_assets/public/Swvl_July2021/images/app-gallery.svg" width="384" alt="App store" title="App store"/></ExternalLink >
          </div>
        </div>
        <div className='des'>
          <h2>WHO WE ARE</h2>
          <div className='details'>
            <p>About US</p>
            <p>Our People</p>
            <p>Investors</p>
            <p>Swvl Caption</p>
          </div>
        </div>
        <div className='des'>
            <h2>WHAT WE DO</h2>
            <div className='details'>
              <p>Daily</p>
              <p>Travel</p>
            </div>
        </div>
      </div>

      <div className='right' >
        <div className='links'>
          
            
            <ExternalLink  href="https://www.instagram.com/swvlegypt/" target="_blank" rel="noreferrer">
              <AiFillInstagram className='icon' />
            </ExternalLink >
          
            
            <ExternalLink  href="https://www.facebook.com/swvlapp" target="_blank" rel="noreferrer">
             <FaFacebookSquare className='icon' />
            </ExternalLink >
         
            
            <ExternalLink  href="https://twitter.com/SwvlNews" target="_blank" rel="noreferrer">
                <FaTwitter className='icon'/>
            </ExternalLink > 
          
            
            <ExternalLink  href="https://www.youtube.com/channel/UCLbQBeSWndlMGFvyssV78OQ" target="_blank" rel="noreferrer">
                <AiFillYoutube className='icon'/>
            </ExternalLink > 
          
            
            <ExternalLink  href="https://www.linkedin.com/company/swvl" target="_blank" rel="noreferrer">
              <FaLinkedinIn className='icon'/>
            </ExternalLink > 
         
        </div>
        <div className='photo'>
         <img src="https://www.swvl.com/hubfs/raw_assets/public/Swvl_July2021/images/Footer_logo.svg"  alt="swvl" title="swvl" />
          <div className='pFloat'>
          <p>Privacy</p>
          <p>Terms</p>
          </div>
        </div>
      </div>
      <div className='developed'><p>Developed by: Eng.aliiabbas@gmail.com</p></div>
    </div>
  )
}
