import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  const location = useLocation();

  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" className='nav-bar-header'>Camille Bagnani</Navbar.Brand>
          <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" activeKey={location.pathname}>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Resume">Resume</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>

  );
}

export default Navigation;