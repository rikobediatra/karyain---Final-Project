import React from "react";
import { useNavigate } from "react-router-dom";
// import picture
import pict from "../assets/konten-login.jpg";

// import component
import Login from "../components/Login.js";

// import bootstrap
import { Navbar, Container, Button, Row, Col, Card } from "react-bootstrap";

// css file
import "../css/loginForm.css";

const from_login = () => {
  return (
    <div className="loginForm">
        <Navbar expand="lg" className="navbar">
            <Container fluid>
            <Navbar.Brand href="#">
                <h2>KARYAIN</h2>
            </Navbar.Brand>
                <Button variant="light" className="buttonHome">Home</Button>
            </Container>
        </Navbar>
        <Container fluid="xl" className="konten">
            <Row>
                <Col sm={7}>
                    <img src={pict} alt="logo" className="size-image"/>
                </Col>
                <Col sm={5} className="login">
                    <Login />
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default from_login;
