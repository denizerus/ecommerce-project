import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">HepsiŞurada</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Elektronik" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bilgisayar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tablet & Telefon
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                TV & Ses Sistemleri
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Moda" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Kadın Giyim
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Kadın Ayakkabı
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Erkek Giyim
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Erkek Ayakkabı
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
