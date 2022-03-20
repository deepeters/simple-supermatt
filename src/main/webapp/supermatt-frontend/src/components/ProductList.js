import React from "react";

import axios from "axios";

import { Card, Table, ButtonGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/products")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ products: data });
      });
  }

  render() {
    return (
      <Card className="border border-dark bg-dark text-white">
        <Card.Header>
          <FontAwesomeIcon icon={faList} />
          Product List
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Product Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.length === 0 ? (
                <tr align="center">
                  <td colSpan="6"> No Products Available</td>
                </tr>
              ) : (
                this.state.products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td>
                      <ButtonGroup>
                        <Button size="sm" variant="outline-primary">
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button size="sm" variant="outline-danger">
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}

export default ProductList;
