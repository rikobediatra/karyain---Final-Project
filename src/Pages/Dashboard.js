import React from "react";

// import form bootstrap
import {  Button, Container, Row, Col } from "react-bootstrap";

// import components
import Sidebar from "../components/Sidebar";
import CardUser from "../components/Card_for_user";

// import css
import '../css/dashboard.css'

const Dashboard = () => {


  return (
    <Container fluid>
        <Row>
            <Col sm={2} style={{padding: 0}}>
                <Sidebar route="/dashboard"/>
            </Col>
            <Col>
                <h4 className="titleDashboard">Let's Upload Your Work to The World Wide</h4>
                <h6>Welcome back <span>Riko Bediatra</span></h6>
                <div className="buttonDashboard">
                    <Button variant="primary" className="btnCreate" href="/create_project">Create New Project</Button>
                </div>
                <div className="cardDashboard">
                    <CardUser />
                    <CardUser />
                    <CardUser />
                    <CardUser />
                </div>
            </Col>
        </Row>
    </Container>
  );
};

export default Dashboard;
