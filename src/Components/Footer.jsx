import React from 'react'
import starLogo from '../assets/starbucks.png';
import playStore from '../assets/play.png';
import appStore from '../assets/app.png';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';

function Footer() {
  return (
    <div className='footerMain'>
        <div className="pB-5 container w-100">
            <div className="row pb-5">
            <div className="col-lg-2 col-6">
                <img src={starLogo} alt="" />
            </div>
            <div className="col-lg-2 col-6">
            <h6 className="fw-bold">About Us</h6>
                <div className='my-4'>Our Heritage</div>
                <div className='my-4'>Coffeehouse</div>
                <div className='my-4'>Our Company</div>
            </div>
            <div className="col-lg-2 col-6">
                <h6 className="fw-bold">Responsibility</h6>
                <div  className='my-4'>Diversity</div>
                <div  className='my-4'>Community</div>
                <div  className='my-4'>Ethical Sourcing</div>
                <div  className='my-4'>Environmental Stewardship</div>
                <div  className='my-4'>Learn More</div>

            </div>
            <div className="col-lg-2 col-6">
                <h6 className="fw-bold">Quick Links</h6>
                <div  className='my-4'>Privacy Policy</div>
                <div  className='my-4'>FAQs</div>
                <div  className='my-4'>Starbucks India Mobile App Terms of Use</div>
                <div  className='my-4'>Customer Service</div>
                <div  className='my-4'>Starbucks Rewards Day Offer</div>
                <div  className='my-4'>Delivery</div>
                <div  className='my-4'>Season's Gifting</div>
                <div  className='my-4'>Offer for Beverage Subscription at Starbucks.</div>
                <div  className='my-4'>Loyalty Program Terms and Conditions</div>
                <div  className='my-4'>Beverage Subscription</div>
            </div>
            <div className="col-lg-2 col-6">
            <h6 className="fw-bold">SOCIAL MEDIA</h6>
            <div className="socialMedia d-flex">

                <div className='my-4  mx-2'>
                    <img src={instagram} alt="" />
                </div>
                <div className='my-4 mx-2'>
                    <img src={facebook} alt="" />
                </div>
                <div className='my-4 mx-2'>
                    <img src={twitter} alt="" />
                </div>
            </div>

            </div>
            <div className="col-lg-2 col-6">
            <div className='my-2 mx-2'>
                    <img src={appStore} alt="" />
                </div>
            <div className='my-2 mx-2'>
                    <img src={playStore} alt="" />
                </div>
            </div>
            </div>
            <hr className='hrFooter' />
            <div className='d-flex footerSecond pb-5'>
                <div className="d-flex me-auto">
                <div className='footerdiv'>Web Accessiblity</div>
                <div className='footerdiv'>Privacy Statement</div>
                <div className='footerdiv'>Terms of Use</div>
                <div>Contact Us</div>

                </div>
                <div className="d-flex ms-auto footerSeconds">
                © 2024 Starbucks Coffee Company. All rights reserved.
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Footer