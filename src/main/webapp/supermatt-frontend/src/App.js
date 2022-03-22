import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Product from "./components/Product";
import ProductList from "./components/ProductList";

function App() {
  const marginTop = {
    marginTop: "20px",
  };

  return (
    <Router>
      <NavigationBar />
      <Container style={marginTop}>
        <Row>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/add" element={<Product />} />
            <Route path="/edit/:id" element={<Product />} />
            <Route path="/list" element={<ProductList />} />
          </Routes>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
