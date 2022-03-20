import React from "react";
import { Col } from "react-bootstrap";

class Welcome extends React.Component {
  render() {
    return (
      <Col lg={12}  className="bg-dark text-white">
        <h1>Hello</h1>
        <p>this is my app</p>
      </Col>
    );
  }
}

export default Welcome;
