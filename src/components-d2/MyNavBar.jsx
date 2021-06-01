import {Navbar, Nav} from "react-bootstrap"

const MyNavBar = ({title}) => 
// props is an object and will hold any prop i'm calling compinent with
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
<Navbar.Brand href="#home">{title}</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ml-auto">
    <Nav.Link href="#">About</Nav.Link>
    <Nav.Link href="#">Browse</Nav.Link>
    <Nav.Link href="#">Home</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>

export default MyNavBar