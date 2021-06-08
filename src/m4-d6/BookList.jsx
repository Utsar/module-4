import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = () => {
  const [searchQuery, setSearchQuery] = useState({ searchQuery });
  state = {
    searchQuery: "",
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="search herel"
              value={this.state.searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {this.props.FantasyBook.filter((b) =>
          b.title.toLowerCase().includes(this.state.searchQuery)
        ).map((b) => (
          <Col md={3}>
            <SingleBook book={b} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default BookList;
