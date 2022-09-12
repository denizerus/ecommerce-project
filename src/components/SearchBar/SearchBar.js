import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import product_db from '../Product/product_db.json';
import {useNavigate} from 'react-router-dom';
import { Search } from 'react-router-dom';

export const SearchBar = () => {
  let navigate = useNavigate();
  const [value, setValue] = useState('');

  const onChange = (event) => {
    
    setValue(event.target.value);
  }
  const onSearch = (searchTerm) => {
    console.log("searchTerm", searchTerm)
    // let path = "/search="+searchTerm;
    navigate('/search', {state: {searchTerm}});
  }

  return (
    <InputGroup className="">
        <Form.Control
          placeholder="Aradığınız ürünü giriniz"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={value}
          onChange={onChange}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={() => onSearch(value)}>
          ARA
        </Button>
      </InputGroup>
  );
};
