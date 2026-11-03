import { Container, Nav, Navbar, Button } from 'react-bootstrap'

export default function AppNavbar() {
  return (
    <Navbar expand="md" className="site-nav py-3">
      <Container>
        <Navbar.Brand href="#top" className="fs-3 fw-bold">
          Spoke<span className="brand-dot">&amp;</span>Co.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-md-center gap-md-2">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button variant="primary" href="#contact" className="ms-md-2">Book a repair</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
