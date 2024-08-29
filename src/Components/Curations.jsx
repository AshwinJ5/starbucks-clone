import React from 'react'
import img1 from '../assets/starone.jpg'
import img2 from '../assets/startwo.jpg'
import img3 from '../assets/stathree.jpg'
import img4 from '../assets/starfour.jpg'
import img5 from '../assets/starfive.jpg'
import img6 from '../assets/starsix.jpg'

function Curations() {
  return (
    <>
        <div className="curationMain my-5">
            <div className="container">
            <h4 className='fw-bolder'>Handcrafted Curations</h4>
            <div className="row ">
                <div className="col-lg-2 col-md-3 col-4 ">
                    <div className="d-flex text-center justify-content-center">
                        <div className='curationImage'>
                            <img src={img1} alt="" />
                        <div>Bestseller</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-4">
                    <div className="d-flex justify-content-center">
                        <div className='curationImage'>
                            <img src={img2} alt="" />
                        <div>Drinks</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-4">
                    <div className="d-flex justify-content-center">
                        <div className='curationImage'>
                            <img src={img3} alt="" />
                        <div>Food</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-4">
                    <div className="d-flex  justify-content-center">
                        <div className='curationImage'>
                            <img src={img4} alt="" />
                        <div>Merchandise</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-4">
                    <div className="d-flex  justify-content-center">
                        <div className='curationImage'>
                            <img src={img5} alt="" />
                        <div>Coffee At Home</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-4">
                    <div className="d-flex  justify-content-center">
                        <div className='curationImage'>
                            <img src={img6} alt="" />
                        <div>Ready To Eat</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Curations