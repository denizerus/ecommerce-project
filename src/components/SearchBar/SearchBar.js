import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const SearchBar = () => {
  return (
    <InputGroup className="">
        <Form.Control
          placeholder="Aradığınız ürünü giriniz"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          ARA
        </Button>
      </InputGroup>
  );
};
