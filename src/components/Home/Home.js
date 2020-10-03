import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../img/Logo.png";
import img1 from "../../img/Sajek.png";
import img2 from "../../img/Sreemongol.png";
import img3 from "../../img/sundorbon.png";

import {
  Button,
  Card,
  CardDeck,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
// import Sajek from "../Travel/Sajek";

const Home = () => {
  return (
    <div className="Header">
      <div className="container ">
        <Navbar bg="light" expand="lg">
          <img className="logo" src={Logo} alt="" />
          <br />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <br />
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search your destination"
              className="mr-sm-2"
            />
          </Form>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#destination">Destination</Nav.Link>
              <Nav.Link href="#Blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Button variant="success">log in</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <CardDeck className="card">
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>SAJEK</Card.Title>
              <Card.Text>
                <h6>
                  SAJEK is a beautiful place in Bangladesh . If you want to
                  refrease your mind , please visit this place . For booking
                  your tour , please click here
                </h6>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="warning">
                <Link to={`/Sajek`}>Booking → </Link>
              </Button>
            </Card.Footer>
          </Card>

          {/* {   card.map(sajek =><Sajek sajek={sajek} ></Sajek>
                }  */}
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>SREEMANGAL</Card.Title>
              <Card.Text>
                <h6>
                  SREEMANGAL is one of the best place in Bangladesh . It has
                  beautiful air which can be freash your mind. please visit this
                  place. For booking your tour, please click here.
                </h6>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="warning">
                {" "}
                <Link to={`/sreemongol`}>Booking → </Link>
              </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>SUNDARBAN</Card.Title>
              <Card.Text>
                <h6>
                  SUNDARBAN is one of the biggest mangrove-forest in the world.
                  If you want to see the Royal bengal Tiger , please visit this
                  place. For booking your tour click here
                </h6>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="warning">
                {" "}
                <Link to={`/sundorbon`}>Booking → </Link>
              </Button>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
};

export default Home;
