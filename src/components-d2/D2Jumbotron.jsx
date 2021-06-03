import { Container } from "react-bootstrap";
import { Jumbotron, Button } from "react-bootstrap";

const D2Jumbotron = ({title, description}) => (
  <Jumbotron fluid>
    <Container>
      <h1>{title}</h1>
      <p>
        {description}
      </p>
      <Button>History</Button>
      <Button>Fantasy</Button>
      <Button>Horror</Button>
      <Button>Romance</Button>
      <Button>Sci-fi</Button>
    </Container>
  </Jumbotron>
);

export default D2Jumbotron;
