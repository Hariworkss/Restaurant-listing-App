import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
    <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/"><i class="fa-solid fa-utensils"></i> RestoFind</Navbar.Brand>
        </Container>
      </Navbar>
        
    </div>
  )
}

export default Header