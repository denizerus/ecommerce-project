import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const AddToBasketBtn = () => {
  const [numberOfProduct, setNumberOfProduct] = useState(1);

  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={() => numberOfProduct > 1 ? setNumberOfProduct(numberOfProduct - 1) : 1}>-</Button>
        <Button variant="light">{numberOfProduct}</Button>
        <Button variant="secondary" onClick={() => setNumberOfProduct(numberOfProduct + 1)}>+</Button>
      </ButtonGroup>
    </div>
  );
};

export default AddToBasketBtn;
