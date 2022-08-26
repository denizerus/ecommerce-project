import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import {Fenomen} from '../Fenomen/Fenomen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function NavBarComponent() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/">eCommerce Web</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/bilgisayar">
                Aasdas
              </Nav.Link>
              <NavDropdown title="Elektronik" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/bilgisayar2">
                  Bilgisayar
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.2">
                  Tablet & Telefon
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.3">
                  TV & Ses Sistemleri
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Moda" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="#action/3.1">
                  Kadın Giyim
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.2">
                  Kadın Ayakkabı
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#action/3.3">
                  Erkek Giyim
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.4">
                  Erkek Ayakkabı
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/bilgisayar" element={<Fenomen />} />
          <Route path="/bilgisayar2" element={<Fenomen />} />
        </Routes>
      </div>
    </div>
  );
}

export default NavBarComponent;
