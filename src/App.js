import React from "react";
import HornedBeast from "./components/HornedBeast.js";
import hornedData from "./data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function App() {

  return (
    <Container>
      <Row lg={10} xs={5} sm={3} md={4}>
        {hornedData.map(hornedInfo => (
          <Col key={hornedInfo._id}>
        <HornedBeast key={hornedInfo._id} title={hornedInfo.title} imageUrl={hornedInfo.image_url} />
        </Col>))}
      </Row>
    </Container>
  );
}

export default App;
