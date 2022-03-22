import React from "react";

import axios from "axios";

import MyToast from "./MyToast";

import { Card, Form, Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faPlusSquare, faUndo } from "@fortawesome/free-solid-svg-icons";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.state.show = false;
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
        this.setState({ show: true });
        setTimeout(() => this.setState({ show: false }), 3000);
      } else {
        this.setState({ show: false });
      }
    });
    this.setState(this.initialState);
  };

  productChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { id, name, category, description } = this.state;

    return (
      <div>
        <div style={{ display: this.state.show ? "block" : "none" }}>
          <MyToast children={{ show: this.state.show, message: "Product Added Successfully.", type: "success" }} />
        </div>
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
      </div>
    );
  }
}

export default Product;
