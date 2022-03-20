import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";

function App() {
  const marginTop = {
    marginTop: "20px",
  };

  return (
    <div className="App">
      <NavigationBar />
      <Container style={marginTop}>
        <Row>
          <Welcome />
        </Row>
      </Container>
    </div>
  );
}

export default App;
