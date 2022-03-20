import React from "react";

import { Navbar, Nav } from "react-bootstrap";

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/116px-Shopping_cart_icon.svg.png"></img>
          Super Matt
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#">Add Product</Nav.Link>
          <Nav.Link href="#">Products List</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
