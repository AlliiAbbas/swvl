import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import '../css/conFour.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ContainerFour() { 
  return (
    <div className='conFour'>
      <div className='top'>
        <h1>
        Now, choose your ride!
        </h1>
        <p> Tailored to all your nitty-gritty needs, transported by Captains who
            maintain a tight ship, so to speak (aye, aye captain)
        </p>
      </div>
      <Carousel className='caro' infiniteLoop={true} useKeyboardArrows={true} emulateTouch={true} swipeable={true} showArrows={false} showStatus={false} >
        <div className='partOne'>
          <div className='descriptionOne'>
          <img src="https://www.swvl.com/hubfs/Swvl_June2021/Images/logo.png" alt="Swvl Daily" className='img1' loading="lazy" />
          <p> Your timely, <br/> affordable, and <br/> comforting <br/>  everyday bus ride <br/> around the city.</p>
          <img src="https://www.swvl.com/hubfs/Swvl_June2021/Images/truck.svg" alt="Swvl Bus" className='img2' loading="lazy" />
          </div>
          <div className='imgFooter'>
            <img src="https://www.swvl.com/hubfs/Swvl_July2021/Images/slider-1.jpg" alt="" />
          </div>
        </div> 
        <div className='partOne'>
          <div className='descriptionTwo'>
          <img src="https://www.swvl.com/hubfs/Swvl_July2021/Images/Swvl%20Business.png" className='img1' alt="Swvl Business" loading="lazy" />
          <p>Solutions that manage <br/>transportation more <br/>efficiently for all kinds <br/>of businesses.</p>
          <img src="https://www.swvl.com/hubfs/Swvl_June2021/Images/truck_2.svg" className='img2' alt="Swvl Bus" loading="lazy" />
          </div>
          <div className='imgFooterTwo'>
            <img src="https://www.swvl.com/hubfs/Swvl_July2021/Images/slider-2.jpg" alt="" />
          </div>      
        </div>
        <div className='partOne'>
          <div className='descriptionThree'>
          <img src="https://www.swvl.com/hubfs/Swvl_July2021/Images/Swvl%20Travel.png" className='img1' alt="Swvl Travel" loading="lazy" />
          <p>Affordable long- <br/> distance rides <br/> between cities <br/> everyday.</p>
          <img src="https://www.swvl.com/hubfs/Swvl_June2021/Images/truck_3.svg" className='img2' alt="Swvl Bus" loading="lazy" />
          </div>
          <div className='imgFooterTwo'>
            <img src="https://www.swvl.com/hubfs/Swvl_July2021/Images/slider-3.jpg" alt="" />
          </div>
        </div>
      </Carousel>

    </div>
  )
}
