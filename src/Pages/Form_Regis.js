import React from "react";

// import picture
import pict from "../assets/2868886.jpg";

import RegisInput from "../components/Register";

// import bootstrap
import { Navbar, Container, Button, Row, Col, Card } from "react-bootstrap";

// css file
import "../css/regis.css";

const from_regis = () => {
  return (
    <div className="regisForm">
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href="#">
            <h2>KARYAIN</h2>
          </Navbar.Brand>
          <Button variant="light" className="buttonHome">
            Home
          </Button>
        </Container>
      </Navbar>
      <Container fluid="xl" className="kontenRegis">
            <Row>
                <Col sm={5} className="regis">
                    <RegisInput />
                </Col>
                <Col sm={7}>
                    <img src={pict} alt="logo" className="size-image-regis"/>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default from_regis;
