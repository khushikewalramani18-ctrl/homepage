import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <h1>Your bike, back on the road by Friday.</h1>
            <p className="lead my-4">
              Spoke &amp; Co. is a neighbourhood repair shop. Drop your bike off in
              the morning, get a clear quote by noon, and pick it up when it’s ready.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button variant="primary" size="lg" href="#contact">Book a repair</Button>
              <Button variant="outline-dark" size="lg" href="#services">See what we fix</Button>
            </div>
          </Col>
          <Col lg={5}>
            <dl className="hero-panel mb-0">
              <dt>48 hrs</dt>
              <dd>Typical turnaround for a standard service</dd>
              <dt>£0</dt>
              <dd>Charge for a quote, whether or not you book</dd>
              <dt>6 months</dt>
              <dd>Guarantee on every repair we carry out</dd>
            </dl>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
