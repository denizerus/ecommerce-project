import React from 'react';
import {useLocation} from 'react-router-dom';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';
import product_info from './product_db.json';
import './Product_style.css';
import useWindowDimensions from '../../context/useWindowDimensions';

export const Product = () => {
  const {width} = useWindowDimensions();
  const location = useLocation();
  let productID = Number(location.pathname.substring(1));
  let product = null;
  for (let key in product_info) {
    if (product_info[key].id === productID) {
      product = product_info[key];
    }
  }
  if(width>1080){
    return (
      <div className="container mt-1">
        <div className="row">
          <div className="col-6 product_image d-flex align-items-center justify-content-center">
            <div className="row">
              <img className="image" src={product.product_img} alt="ürün_alt" />
            </div>
          </div>
          <div className="col-6 product_info p-4">
            <h5 className="">{product.product_title}</h5>
            <h2 className="">{product.product_new_price} TL</h2>
  
            <div className="container product_info mt-5">
              <AddToCartBtn key={productID} productID={productID} />
            </div>
          </div>
        </div>
        <div className="card">
          <h5 className="card-header">Ürün Açıklaması</h5>
          <div className="card-body">
            <h5 className="card-title">{product.product_title}</h5>
            <p className="card-text">{product.product_details}</p>
          </div>
        </div>
      </div>
    );
  }else{
    return (
      <div className="container mt-1">
        <div className="col">
          <div className="col product_image d-flex align-items-center justify-content-center">
            <div className="row">
              <img className="image" src={product.product_img} alt="ürün_alt" />
            </div>
          </div>
          <div className="col product_info p-4">
            <h5 className="">{product.product_title}</h5>
            <h2 className="">{product.product_new_price} TL</h2>
            <div className="container product_info mt-5">
              <AddToCartBtn key={productID} productID={productID} />
            </div>
          </div>
        </div>
        <div className="card">
          <h5 className="card-header">Ürün Açıklaması</h5>
          <div className="card-body">
            <h5 className="card-title">{product.product_title}</h5>
            <p className="card-text">{product.product_details}</p>
          </div>
        </div>
      </div>
    )
  }
};
