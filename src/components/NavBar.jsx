import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
    >
      <Navbar.Brand href="#page-top">Caipyra 2025</Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#about">O Evento</Nav.Link>
          <Nav.Link href="#programacao">Programação</Nav.Link>
          <Nav.Link href="#local">Local</Nav.Link>
          <Nav.Link href="#patrocinio">Patrocinadores</Nav.Link>
          <Nav.Link href="#codigo">Código de Conduta</Nav.Link>
          <Nav.Link href="#covid">Orientações COVID</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}