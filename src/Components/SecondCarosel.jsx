import React from 'react'
import contentImg from '../assets/star.jpg';
import { Button } from 'react-bootstrap';

function SecondCarosel() {
  return (
    <div className='SecondCarosel py-3 mb-5'>
    <div  className=" container my-3 ">
        <div className="row d-flex ">

        <div className='col-lg-8 col-8 h4 fw-bolder'>
              Learn more about the world of coffee!  
        </div>
        <div className="col-lg-4 col-4 discover text-end small">
        Discover More
        </div>
        </div>

        <div className="contentImg d-grid my-5 align-content-between">
          <span className='mt-3 ms-3 caroselTopButton'>Coffee Culture</span>
          <div className=" mb-5 ms-5">

          <div className='h3 fw-bolder'>Art & Science Of Coffee Brewing</div>
          <div style={{fontSize:'14px'}}>Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.</div>
          <Button variant="light" className='rounded-pill  mt-5'><span className='px-5 fw-bolder' style={{fontSize:'12px'}}>Know More</span></Button>{' '}
          </div>
        </div>

    </div>
    </div>
  )
}

export default SecondCarosel