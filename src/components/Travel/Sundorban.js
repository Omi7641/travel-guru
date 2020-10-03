import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Sundorban = () => {
  return (
    <div>
      <h5>
        <Container>
          <Row>
            <Col sm={8}>
              <Card>
                <Card.Header>Welcome To Sreemongol</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      It is said the name Sreemangal (or Srimangal) is named
                      after Sri Das and Mangal Das; two brothers who settled on
                      the banks of the Hail Haor. A copper plate of Raja
                      Marundanath from the 11th century was found in Kalapur.
                      During an excavation at Lamua, an ancient statue of Ananta
                      Narayan was dug out. In 1454, the Nirmai Shiva Bari was
                      built and still stands today. Srimangal thana was
                      established in 1912. The central town later became a
                      pourashava in 1935. In 1963, two peasants were killed by
                      police officers which kicked off the Balishira peasant
                      riots. During the Bangladesh Liberation War of 1971, the
                      Pakistani army reached Srimangal on 30 April setting
                      houses on fire and committing atrocities against women.
                      The East Pakistan Rifles camp and Wapda office premises
                      were among the two mass killing sites. Two mass graves
                      remain in Bharaura with a memorial in North Bharaura.
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

export default Sundorban;
