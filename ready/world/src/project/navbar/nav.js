import React from "react";
import {Navbar,Nav,Container}from 'react-bootstrap';

import './nav.css';

function Navigation(){
    return(
        <>
        <section className="nav-color">
          <Navbar>
            <Container>
           <Navbar.Brand >
            <h2>Project</h2>
            </Navbar.Brand>
            <Nav >
            <Nav.Link href="/" className="custom-menu">
                Home
              </Nav.Link>
              <Nav.Link href="/Selected" className="custom-menu">
                Information
              </Nav.Link>
            
            </Nav>
            </Container>
            </Navbar>
            
        </section>
        
        </>
    )
}
export default Navigation;