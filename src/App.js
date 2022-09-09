import './App.css';
import Header from './components/Header/Header';
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {Fenomen} from './components/Fenomen/Fenomen';
import {Home} from './components/Home/Home';
import {Product} from './components/Product/Product';
import {CartContext} from './context/ShoppingCartContext';
import {useState} from 'react';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';

function App() {
  const [cartData, setCartData] = useState({
    order: [{id: 1, quantitiy: 3}],
  });

  const data = {
    cartData,
    setCartData,
  };

  return (
    <CartContext.Provider value={data}>
      <BrowserRouter>
        <div>
          <Header />
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand as={Link} to="/">
                Anasayfa
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link
                    as={Link}
                    to="/fenomen"
                    //style={{color: 'red', fontweight: 'bold'}}
                  >
                    Fenomen Seçimleri
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
              <Route path="/" element={<Home />} />
              <Route path="/fenomen" element={<Fenomen />} />
              <Route path="/cart" element={<ShoppingCart />} />
              {/* <Route path="/:productID" element={<Product />} /> */}
              <Route path="/:productID" element={<Product />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
