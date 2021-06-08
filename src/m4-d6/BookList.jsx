import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ FantasyBook }) => {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {}, [FantasyBook]);

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="search herel"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {FantasyBook.filter((b) =>
          b.title.toLowerCase().includes(searchQuery)
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
