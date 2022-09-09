import React from 'react';
import {CartContext, useContext} from '../../context/ShoppingCartContext';
import product_db from '../Product/product_db.json';
import './ShoppingCard_Style.css';

export const ShoppingCart = () => {
  const {cartData} = useContext(CartContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <h2>Sepetim</h2>

          <div className="card">
            <ul className="list-group list-group-flush">
              {cartData.order.map((order) => {
                return product_db.map((p_data) => {
                  if (p_data.id == order.id) {
                    return (
                      <li className="list-group-item">
                        <div className="row cart_item_container">
                          <div className="col-2">
                            <img
                              src={p_data.product_img}
                              alt={p_data.product_title}
                              className="cart_img"
                            />
                          </div>
                          
                          <div className="col-9">
                            <p>Ürün Adı: {p_data.product_title}</p>
                            <p>Fiyatı: {p_data.product_new_price}</p>
                            <p>Miktarı: {order.quantitiy}</p>
                          </div>
                        </div>
                      </li>
                    );
                  }
                });
              })}
            </ul>
          </div>
        </div>
        <div className="col-3">2 of 3 (wider)</div>
      </div>
    </div>
  );
};
