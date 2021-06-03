import { Nav, Navbar, NavDropdown, Button, Form, FormControl } from "react-bootstrap";

const D4NavBar = ({ title }) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#">{title}</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About</Nav.Link>
        <NavDropdown title="Browse" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Horror</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Fantasy</NavDropdown.Item>
          <NavDropdown.Item href="#action4">History</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Romance</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Sci-Fi</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default D4NavBar;
