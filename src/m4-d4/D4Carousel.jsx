import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import history from "../assets/history.json";
import fantasy from "../assets/fantasy.json";
import D4Form from "./D4Form";
import D4NavBar from "./D4NavBar";

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

            <Card>
              {history
                .filter((book) => book.title.includes(this.state.searchQuery))
                .map((book) => (
                  <Card.Body key={book.asin}>
                    <img
                      onClick={() =>
                        this.setState({
                          selected: !this.state.selected,
                        })
                      }
                      className="d-block w-100"
                      src={book.img}
                      alt={book.asin}
                    />
                    {this.state.selected && <D4Form asin={book.asin} />}
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {book.category}
                    </Card.Subtitle>
                    <Card.Link href="#">${book.price}</Card.Link>
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                  </Card.Body>
                ))}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default D4Carousel;
