import React from "react";

import { Card, Table } from "react-bootstrap";

class ProductList extends React.Component {
  render() {
    return (
      <Card className="border border-dark bg-dark text-white">
        <Card.Header>Product List</Card.Header>
        <Card.Body>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Product Category</th>
              </tr>
            </thead>
            <tbody>
              <tr align="center">
                <td colSpan="6">No Books Available</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}

export default ProductList;
