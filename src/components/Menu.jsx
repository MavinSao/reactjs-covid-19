import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
export default class Menu extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Link to="/">
            <Navbar.Brand>Covid 19</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/news">
                News
              </Nav.Link>
              <Nav.Link as={Link} to="/globle">
                Globle
              </Nav.Link>
              <NavDropdown title="Language" id="basic-nav-dropdown">
                <NavDropdown.Item>Khmer</NavDropdown.Item>
                <NavDropdown.Item>English</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}
