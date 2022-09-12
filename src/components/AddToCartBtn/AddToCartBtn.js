import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {CartContext, useContext} from '../../context/ShoppingCartContext';

const AddToCartBtn = ({productID}) => {
  const [numberOfProduct, setNumberOfProduct] = useState(1);

  const {cartData, setCartData} = useContext(CartContext);

  function addToCart() {
    const newCartData = {
      id: productID,
      quantitiy: numberOfProduct,
    };

    var dahaOnceVar = false;

    for (var key in cartData) {
      var cdata = cartData[key];
      cdata.map((data, idx) => {
        if (data.id == productID) {
          dahaOnceVar = true;
        }
      });
    }

    var currentOrder;
    
    if (dahaOnceVar) {
      for (var keyy in cartData) {
        var cdataa = cartData[keyy];
        cdataa.map((data) => {
          if (data.id == productID) {
            currentOrder=data;
            currentOrder.quantitiy+=numberOfProduct;
          }
        });
      }
      var order = cartData.order;
      setCartData((prevState) => ({
        order
      }));
    } else {
      if(cartData.order.length===1 && cartData.order[0].id === null){
        setCartData((prevState) => ({
          order: [newCartData]
        }));
      }else{
      setCartData((prevState) => ({
        order: [...prevState.order, newCartData],
      }));
    }
    }
  }

  return (
    <div className="col d-flex justify-content-center">
      <div className="row d-flex">
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary"
            onClick={() =>
              numberOfProduct > 1 ? setNumberOfProduct(numberOfProduct - 1) : 1
            }
          >
            -
          </Button>
          <Button variant="light">{numberOfProduct}</Button>
          <Button
            variant="secondary"
            onClick={() => setNumberOfProduct(numberOfProduct + 1)}
          >
            +
          </Button>
        </ButtonGroup>
        <Button
          onClick={addToCart}
          type="button"
          className="btn btn-primary mt-2"
        >
          Sepete Ekle
        </Button>
      </div>
    </div>
  );
};

export default AddToCartBtn;
