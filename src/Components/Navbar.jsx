import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navLogo from '../assets/starbucks.png';
import acc from '../assets/acc.svg';
import search from '../assets/search.svg';

function Navbars() {
  return (
    <>
      <Navbar expand="lg" style={{ minHeight: '20px' }} className="bg-body-tertiary navbarMain">
        <Container >
          <Navbar.Brand href="#">
            <img style={{ height: '40px' }} src={navLogo} alt="Starbucks Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className=' mx-auto'>
            <Nav className="me-auto my-2 my-lg-0" style={{ minHeight: '25px' }}>
              {['Home', 'Gift', 'Order', 'Pay', 'Store'].map((item, index) => (
                <Nav.Link key={index} className="mx-auto" href="#">
                  <div className="mx-4">{item}</div>
                </Nav.Link>
              ))}
            </Nav>
            <Form className="d-flex">
              <div className="search-container mx-5">
                <img src={search} className="search-icon" alt="Search Icon" />
                <input
                  className="navSearch"
                  type="text"
                  placeholder="Looking for something specific?"
                  aria-label="Search"
                />
              </div>
            </Form>
            <center>
            <div className=" mx-auto my-2">
              <img src={acc} alt="Account" />
            </div>

            </center>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
