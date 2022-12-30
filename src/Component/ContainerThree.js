import React from 'react'
import '../css/conThree.css'
export default function ContainerThree() {
  return (
    <div className='conThree'>
      <div className='container'>
      <div className='part'>
          <h3>Time</h3>
          <p>
            Tik tok tik tok.
            We'll always take you
            there right on the dot
            with rides moving
            around the clock.
          </p>
          <img src="https://www.swvl.com/hubfs/Swvl_June2021/Images/Group_516__2_.svg" alt="Time" title='Time' />
      </div>
      <div className='part'>
      <h3>Money</h3>
          <p>
          They say money can't
          buy you happiness,
          but we'd prefer
          to cry on a beach
          vacation.
          </p>
          <img src="https://www.swvl.com/hubfs/Swvl_June2021/Images/Group_515.svg" alt="Money" title='Money' className='mid' />
      </div>
      <div className='part'>
      <h3>Comfort</h3>
          <p>
          20 going on 65.
          We'll take the years
          off your back pain
          with our comfortable
          everyday rides.
          </p>
          <img src="https://www.swvl.com/hubfs/Swvl_July2021/Images/comfort.svg" alt="Time" title='Time' className='last'/>
      </div>
      </div>
      
    </div>
  )
}
