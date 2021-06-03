import {
  Card,
  Carousel,
  Col,
  Container,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import history from "../assets/history.json";
import fantasy from "../assets/fantasy.json";
import { Component } from "react";

class D4Carousel extends Component {
  state = {
    selected: null,
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
                  key={book.aisin}
                  onClick={() =>
                    this.setState({
                      selected: book,
                    })
                  }
                >
                  <img
                    className="d-block w-100"
                    src={book.img}
                    alt={book.aisin}
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
                  <InputGroup>
                    <InputGroup.Text>Enter Your comments here</InputGroup.Text>
                    <FormControl as="textarea" aria-label="With textarea" />
                  </InputGroup>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          <Col xs={12} md={6}>
            <h2>Here are Fantasy books</h2>
            <Carousel>
              {fantasy.map((book) => (
                <Carousel.Item
                  key={book.aisin}
                  onClick={() =>
                    this.setState({
                      selected: book,
                    })
                  }
                >
                  <img
                    className="d-block w-100"
                    src={book.img}
                    alt="First slide"
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
