import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Container, Nav, FormControl, Form, Button } from 'react-bootstrap'; 

const Header = () => {
  return(
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand as={Link} to="/">Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
          <Nav.Link as={Link} to="/posts/create-post">Create Post</Nav.Link>
           
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;