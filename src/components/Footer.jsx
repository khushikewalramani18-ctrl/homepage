import { Container, Nav } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <small>© 2026 Spoke &amp; Co. All rights reserved.</small>
        <Nav>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#top">Back to top</Nav.Link>
        </Nav>
      </Container>
    </footer>
  )
}
