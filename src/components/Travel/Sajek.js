import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Sajek = () => {
  //   const { name } = props.sajek;
  return (
    <div>
      <h5>
        <Container>
          <Row>
            <Col sm={8}>
              <Card>
                <Card.Header>Welcome To Sajek</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      Sajek is the biggest union of Bangladesh whose size is 702
                      square miles. The area is formed with the combination of
                      Sajek Ruiluipara and Konglak Para. Established in 1885,
                      the height of the Ruiluipara is approximately 1720 feet
                      from the sea level and the height of the Konglakpara from
                      the sea level is approximately 1800 feet. Mainly, Sajek is
                      the living place of indigenous people including Lusai,
                      Pankhwa, and Tripura. The banana and orange of Sajek are
                      very famous. Many parts of Rangamati are seen from Sajek
                      Valley. So the Sajek valley is called the roof of
                      Rangamati.{" "}
                    </p>
                    <footer className="blockquote-footer">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Form>
                <Form.Group controlId="formBasicLocation">
                  <Form.Label>Orion</Form.Label>
                  <Form.Control
                    type="location"
                    placeholder="Enter your location"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicLocation">
                  <Form.Label>Destination</Form.Label>
                  <Form.Control
                    type="location"
                    placeholder="Enter your location"
                  />
                </Form.Group>
                <Form.Group></Form.Group>
                <Button variant="warning" type="submit">
                  Start Booking →
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </h5>
    </div>
  );
};

export default Sajek;
