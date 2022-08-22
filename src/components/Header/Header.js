import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Header = () => {
  return (
    <React.Fragment>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <h1 style={{color: 'orange'}}>HepsiŞurada</h1>
          </div>
          <div className="col-6 d-grid align-items-center">
            <SearchBar />
          </div>
          <div className="col d-grid align-items-center">
            <DropdownButton id="dropdown-basic-button" title="Hesabım">
              <Dropdown.Item href="#/action-1">Giriş Yap</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="col d-grid align-items-center">
            <Button variant="outline-primary">Sepetim</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
