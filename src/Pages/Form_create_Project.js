import React from "react";
import {useState, useEffect} from "react";

// import side bar
import Sidebar from "../components/Sidebar";

// import form bootstrap
import { Form, Button, Container, Row, Col } from "react-bootstrap";

// import css
import '../css/form_project.css'

import { useNavigate } from "react-router-dom";

function Create_Project() {
  let navigate = useNavigate();

  // useState form
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [Category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState("");

  useEffect(() => {
    console.log(title);
    console.log(owner);
    console.log(Category);
    console.log(description);
  }, [title, owner, Category, description]);

  const handleCreate = async (e) => {
    e.preventDefault();

    console.log(poster)
    console.log(e.target.file)
    // post ke API

    navigate('/dashboard');
      
  }

  return (
    <Container fluid>
      <Row>
        <Col sm={2} style={{ padding: 0 }}>
          <Sidebar route='/dashboard'/>
        </Col>
        <Col>
        <h3>Let's Upload Your Work to The World Wide</h3>
        <h5>Welcome <span>Riko Bediatra</span></h5>
          <Form onSubmit={handleCreate}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter title" 
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicOwner">
              <Form.Label>Owner</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter owner" 
                onChange={(e) => setOwner(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter cantegory" 
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter description" 
                onChange={(e) => setDescription(e.target.value)}  
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPoster">
              <Form.Label>Poster</Form.Label>
              <Form.Control 
                type="file"
                onChange={(e) => setPoster(e.target.value)}
              />
            </Form.Group>
            <Button className="btn-create" variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Create_Project;
