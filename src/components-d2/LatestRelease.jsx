import { Container, Row, Col, Card } from "react-bootstrap";
import books from "../assets/fantasy.json";

const LatestRelease = () => (
  <Container>
    <Row>
      {books.map((book) => (
        <Col className="col-md-4" key={book.asin}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.category}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default LatestRelease;
