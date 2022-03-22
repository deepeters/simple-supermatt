import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
          <Link to = {""} className="navbar-brand">
          <img alt="cart" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/116px-Shopping_cart_icon.svg.png"></img>
          Super Matt
          </Link>
        <Nav className="me-auto">
          <Link to = {""} className="nav-link">Home</Link>
          <Link to = {"/add"} className="nav-link">Add Product</Link>
          <Link to = {"/list"} className="nav-link">Products List</Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
