import { Button } from 'react-bootstrap'
import React from 'react'

function Nav() {
  return (
    <>
       <div className=" navTwo p-3">
        <div className="container d-flex   w-100">
        <div className="me-auto fs-5">
        Starbucks
        </div>
        <div className="ms-auto">
        <Button size='sm' variant="outline-light text-capitalize rounded-pill">Know More</Button>
        </div>

        </div>
        </div> 
    </>
  )
}

export default Nav