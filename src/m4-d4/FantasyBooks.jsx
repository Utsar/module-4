import { Component } from "react";
import fantasy from "../assets/fantasy.json";
import { Card, Container, Row, Col } from "react-bootstrap";

class FantasyBooks extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          {fantasy
            .filter((book, i) => i < 10)
            .map((book) => (
              <Col xs={12} md={3} lg={2}>
                <Card>
                  <Card.Body>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {book.category}
                    </Card.Subtitle>
                    <Card.Link href="#">${book.price}</Card.Link>
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default FantasyBooks;
