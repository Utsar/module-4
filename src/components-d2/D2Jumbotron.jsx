import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";

const D2Jumbotron = ({title, description}) => (
  <Jumbotron fluid>
    <Container>
      <h1>{title}</h1>
      <p>
        {description}
      </p>
    </Container>
  </Jumbotron>
);

export default D2Jumbotron;
