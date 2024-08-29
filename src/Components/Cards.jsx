import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Button, Card } from 'react-bootstrap';
import cardImg1 from '../assets/favone.jpg'
import vegNonveg from '../assets/veg.svg'
import flower from '../assets/flower.svg'

function Cards() {
    const options={
        loop:true,
        items:1,
        autoplay:true,
        autoplayTimeout:2500,
        nav:false,
        dots:false,
        animateOut:'slideOutUp',
        margin:0,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1.5
            },
            768:{
                items:2.5
            },
            1000:{
                items:3
            }
        }
    }
  return (
    <div className='my-5' style={{backgroundColor:'#eeeded'}}>
        <div  className="flower text-end ">

        <img src={flower} alt="" />
        </div>
      <div className="container">
      <div className="row d-flex recommends">

<div className='col-lg-8 col-8 h4 fw-bolder'>
      Barista Recommends
</div>
<div className="col-lg-4 col-4 discover text-end small">
View Menu
</div>
</div>

         <OwlCarousel className='owl-theme' {...options}  >

       <div className='px-2'  >
     <Card  className='owlCarouselMain d-flex justify-content-space-around me-2 border border-light   mx-auto my-5' >
     <div className="row">
      <div className="col-4">
        <img src={cardImg1} alt="" />
        <div className='fw-bolder my-3'>₹ 245 <small>.50</small> </div>
      </div>
      <div className="col-8">
          <img src={vegNonveg} />
        <div className='fw-bolder' style={{fontSize:'14px'}}>Cappuccino
        </div>
        <div className='' style={{fontSize:'10px',color:'grey'}}>SHORT(237ML), 156 kcal
        </div>
        <div className='text-end mt-4'>
        <Button variant="light" className='rounded-pill  text-white owlBtn'><span className='fw-bolder px-2' style={{fontSize:'12px'}}>Add Item</span></Button>{' '}

        </div>
      </div>
     </div>
     </Card>
     </div>
 

 </OwlCarousel>      
      </div>

    </div>
  )
}

export default Cards