import {Navbar, Nav} from "react-bootstrap"

const MyNav = ({title}) => 
// props is an object and will hold any prop i'm calling compinent with
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">{title}</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ml-auto">
    <Nav.Link href="#features">Home</Nav.Link>
    <Nav.Link href="#pricing">About</Nav.Link>
    <Nav.Link href="#pricing">Browse</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>

export default MyNav