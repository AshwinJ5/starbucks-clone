import React from 'react'
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


function Carousels() {
  return (
    <>
    <Carousel className='my-4'>
    <Carousel.Item interval={1000}>
      <div className="container my-5 carousalMain carousalOne mb-2">
        <div style={{fontSize:'10px'}} className="text-end pt-2 text-white">*T&C APPLY</div>
      <Carousel.Caption className='text-white row ' >
            <div className="col text-start"> 
        <h5 className='me-auto'>Starbucks</h5>
          <h4 className='fw-bolder'>Beverage Subscription</h4>
          <div>Starbucks Subscribtion is back! Sip your favourites for less. Tap for Deatails. T&C Apply.</div>
          <div className="text-end">
          <Button variant="light" className='rounded-pill'><span className='px-3 fw-bolder' style={{fontSize:'12px'}}>Know More</span></Button>{' '}
          </div>
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <div className="container my-5 carousalMain carousalTwo mb-2">
        <div style={{fontSize:'10px'}} className="text-end pt-2 text-white">*T&C APPLY</div>
      <Carousel.Caption className='text-white row ' >
            <div className="col text-start"> 
        <h5 className='me-auto'>Starbucks</h5>
          <h4 className='fw-bolder'>Beverage Subscription</h4>
          <div>Starbucks Subscribtion is back! Sip your favourites for less. Tap for Deatails. T&C Apply.</div>
          <div className="text-end">
          <Button variant="light" className='rounded-pill  text-white cauroselBtn'><span className='px-3 fw-bolder' style={{fontSize:'12px'}}>Know More</span></Button>{' '}
          </div>
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <div className="container my-5 carousalMain carousalThree mb-2">
        <div style={{fontSize:'10px'}} className="text-end pt-2 text-white">*T&C APPLY</div>
      <Carousel.Caption className='text-white row ' >
            <div className="col text-start"> 
        <h5 className='me-auto'>Starbucks</h5>
          <h4 className='fw-bolder'>Beverage Subscription</h4>
          <div>Starbucks Subscribtion is back! Sip your favourites for less. Tap for Deatails. T&C Apply.</div>
          <div className="text-end">
          <Button  className='rounded-pill cauroselBtn'><span className='px-3 fw-bolder' style={{fontSize:'12px'}}>Know More</span></Button>{' '}
          </div>
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Carousels