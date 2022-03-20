import React from "react";
import { Col } from "react-bootstrap";

class Welcome extends React.Component {
  render() {
    return (
      <Col lg={12} className="bg-dark text-white">
        <h1>Welcome to Super Matt</h1>
        <p>An application that sounds like Super Market but really is not. Have a look around to see inventory</p>
        <footer className="blockquote-footer">By Management</footer>
      </Col>
    );
  }
}

export default Welcome;
