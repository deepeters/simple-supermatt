import React from "react";

import { Card, Form, Col, Row, Button } from "react-bootstrap";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", category: "", description: "" };
    this.productChange = this.productChange.bind(this);
    this.submitProduct = this.submitProduct.bind(this);
  }

  submitProduct(event) {
    alert(
      "Name: " +
        this.state.name +
        ", Category: " +
        this.state.category +
        ", Description: " +
        this.state.description +
        ""
    );
    event.preventDefault();
  }

  productChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <Card className="border border-dark bg-dark text-white">
        <Card.Header>Add a Product</Card.Header>
        <Form onSubmit={this.submitProduct} id="productFormId">
          <Card.Body>
            <Form>
              <Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.productChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Product Name"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCategory">
                  <Form.Label>Product Category</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="category"
                    value={this.state.category}
                    onChange={this.productChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Product Category"
                  />
                </Form.Group>
              </Row>
              <Form.Group as={Col} controlId="formGridDescription">
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.productChange}
                  className={"bg-dark text-white"}
                  placeholder="Enter Product Description"
                />
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
