import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import history from "../assets/history.json";
import fantasy from "../assets/fantasy.json";
import D4Form from "./D4Form";

class D4Carousel extends React.Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3 d-flex">
          <Col xs={12} md={6}>
            <h2>Here are History books</h2>
            <Carousel>
              {history.map((book) => (
                <Carousel.Item
                  key={book.asin}
                  onClick={() =>
                    this.setState({
                      selected: !this.state.selected,
                    })
                  }
                >
                  <img
                    className="d-block w-100"
                    src={book.img}
                    alt={book.asin}
                  />
                  <Card>
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {book.category}
                      </Card.Subtitle>
                      <Card.Link href="#">${book.price}</Card.Link>
                      {/* <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                  </Card>
                  {this.state.selected && <D4Form asin={book.asin} />}
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default D4Carousel;
