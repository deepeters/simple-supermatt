import React from "react";

import axios from "axios";

import { Card, Form, Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPlusSquare, faUndo } from "@fortawesome/free-solid-svg-icons";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.productChange = this.productChange.bind(this);
    this.submitProduct = this.submitProduct.bind(this);
  }

  initialState = {
    id: "",
    name: "",
    category: "",
    description: "",
  };

  resetProduct = () => {
    this.setState(() => this.initialState);
  };

  submitProduct = (event) => {
    event.preventDefault();

    const product = {
      name: this.state.name,
      category: this.state.category,
      id: this.state.id,
      description: this.state.description,
    };

    axios.post("http://localhost:8080/products", product).then((response) => {
      if (response.data != null) {
        this.setState(this.initialState);
        alert("Product Added Successfully");
      }
    });
  };

  productChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { id, name, category, description } = this.state;

    return (
      <Card className="border border-dark bg-dark text-white">
        <Card.Header>
          <FontAwesomeIcon icon={faPlusSquare} />
          Add a Product
        </Card.Header>
        <Form onReset={this.resetProduct} onSubmit={this.submitProduct} id="productFormId">
          <Card.Body>
            <Form>
              <Row>
                <Form.Group as={Col} controlId="formGridId">
                  <Form.Label>Product #</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="text"
                    name="id"
                    value={id}
                    onChange={this.productChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Product ID"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.productChange}
                    className={"bg-dark text-white"}
                    placeholder="Enter Product Name"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCategory">
                  <Form.Label>Product Category</Form.Label>
                  <Form.Control
                    required
                    autoComplete="off"
                    type="text"
                    name="category"
                    value={category}
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
                  autoComplete="off"
                  type="text"
                  name="description"
                  value={description}
                  onChange={this.productChange}
                  className={"bg-dark text-white"}
                  placeholder="Enter Product Description"
                />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" variant="success" type="submit">
              <FontAwesomeIcon icon={faSave} />
              Submit
            </Button>{" "}
            <Button size="sm" variant="info" type="reset">
              <FontAwesomeIcon icon={faUndo} />
              Reset
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}

export default Product;
