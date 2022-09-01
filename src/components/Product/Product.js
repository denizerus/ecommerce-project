import React from 'react';
import {useLocation} from 'react-router-dom';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';
import product_info from './product_db.json';
import Product_style from './Product_style.css';

export const Product = () => {
  const location = useLocation();
  let productID = location.pathname.substring(1);
  let product = null;
  for(let key in product_info){
      if(product_info[key].id == productID){
        product = product_info[key];
    }
  }
  return (
    <div className="container mt-1">
      <div className="row">
        <div className="col-6 product_image d-flex align-items-center justify-content-center">
          <div className="row">
            <img src={product.product_img} alt="ürün_alt" />
          </div>
        </div>
        <div className="col-6 product_info p-4">
          <h5>{product.product_title}</h5>
          <h2>{product.product_new_price}</h2>
          <h5>{product.product_details}</h5>

          <AddToCartBtn productID={productID} />
        </div>
      </div>
      <h1>Current pathname: {productID}</h1>
    </div>
  );
};
