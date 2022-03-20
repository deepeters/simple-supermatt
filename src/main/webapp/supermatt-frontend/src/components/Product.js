import React from "react";

import { Card, Form, Col, Button } from "react-bootstrap";

class Product extends React.Component {
  render() {
    return (
      <Card className="border border-dark bg-dark text-white">
        <Card.Header>Add a Product</Card.Header>
        <Form>
          <Card.Body>
            <Form>
              <Form.Group as={Col}>
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" class={"bg-dark text-white"} placeholder="Enter Product Name" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Product Description</Form.Label>
                <Form.Control type="text" class={"bg-dark text-white"} placeholder="Enter Product Description" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Product Category</Form.Label>
                <Form.Control type="text" class={"bg-dark text-white"} placeholder="Enter Product Category" />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" variant="success" type="submit">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}

export default Product;
