import { Card, Container, Row, Col, Button } from "react-bootstrap";

const SingleBook = ({ book }) => (
  <Container>
    <Row>
      <Col>
        <Card>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.catergory}</Card.Text>
            <Button variant="primary">${book.price}</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default SingleBook;
