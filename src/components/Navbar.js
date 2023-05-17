import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './edyoda.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BiSearch } from "react-icons/bi";



function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt="logo" height="30"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="courses" id="navbarScrollingDropdown" style={{color:'black',padding:'15px'}}>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Programs" id="navbarScrollingDropdown" style={{color:'black',fontWeight:'normal',padding:'15px'}}>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav style={{ gap: '60px' }}>
            <Nav.Link href="#deets"><BiSearch style={{fontSize:"1rem",color:"black"}}/></Nav.Link>
            <Nav.Link eventKey={1} href="#memes" style={{fontSize:"1rem",color:"black"}}>
                Log in
            </Nav.Link>
            <Button
      variant="primary"
      style={{
        backgroundImage: 'linear-gradient(to right, #0048FF 0%, #0096FF 100%)',
        color: 'white',
        padding:'5px 25px 5px 25px',
        borderTopLeftRadius: '50px',
        borderTopRightRadius: '50px',
        borderBottomLeftRadius: '50px',
        borderBottomRightRadius: '50px',
      }}
    >
      Join Now
    </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;