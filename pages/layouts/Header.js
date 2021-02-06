import Head from "next/head";

import { navbar, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () => (

  <div>
    <Head>
      <title>My Profile</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar fixed="top" collapseonSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">More...</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
          <NavDropdown title="News" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/Resume">Resume</NavDropdown.Item>
              <NavDropdown.Item href="/Experiences">Experiences</NavDropdown.Item>
          </NavDropdown>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>

);

export default Header;