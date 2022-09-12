import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import product_db from '../Product/product_db.json';

export const SearchBar = () => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  }
  const onSearch = (searchTerm) => {
    console.log('search ', searchTerm);
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
        <div className='dropdown'>
          {product_db.filter(item => {
            const searchTerm = value.toLowerCase();
            const fullName = item.product_title.toLowerCase();

            return searchTerm && fullName.startsWith(searchTerm)
          })
          .map((item) => { return console.log(item.product_title)})}
        </div>
      </InputGroup>
  );
};
