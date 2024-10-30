import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/weston-logo.png";

const Header = () => {
  return (
    <header>
      <Navbar
        className="py-1"
        style={{ backgroundColor: "#f3f3f3" }}
        variant="light"
        expand="md"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="Weston Design" style={{ width: "100px" }} />{" "}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto" style={{ color: "#1234jf" }}>
              <LinkContainer to="/">
                <Nav.Link className="fs-5 me-3" style={{ color: "#000" }}>
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/portfolio">
                <Nav.Link className="fs-5 me-3">Portfolio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="about">
                <Nav.Link className="fs-5 me-3">About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="fs-5">Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
