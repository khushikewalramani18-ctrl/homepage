import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Features() {
  return (
    <section className="features" id="services">
      <Container>
        <h2 className="display-6 fw-bold mb-2">What we do</h2>
        <p className="mb-5 fs-5">Three services cover almost everything that brings a bike through our door.</p>
        <Row className="g-4" id="pricing">
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body className="p-4">
                <Card.Title as="h3">Basic tune-up</Card.Title>
                <Card.Text>Brake and gear adjustment, tyre pressure, chain clean and lube, and a safety check.</Card.Text>
                <p className="price mb-0">From £45</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body className="p-4">
                <Card.Title as="h3">Full service</Card.Title>
                <Card.Text>Everything in the tune-up, plus drivetrain strip-down, wheel truing, and bearing check.</Card.Text>
                <p className="price mb-0">From £120</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body className="p-4">
                <Card.Title as="h3">Puncture &amp; parts</Card.Title>
                <Card.Text>Walk in, wait ten minutes, ride out. Tubes, tyres, brake pads and chains in stock.</Card.Text>
                <p className="price mb-0">From £12</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
