import React from 'react';
import {CartContext, useContext} from '../../context/ShoppingCartContext';
import product_db from '../Product/product_db.json';
import './ShoppingCard_Style.css';

export const ShoppingCart = () => {
  const {cartData} = useContext(CartContext);
  
  function CalculateTotalPrice(){
    var total_product_price=0;
      
      cartData.order.forEach(order => {
        product_db.forEach(p_data => {
          if(p_data.id==order.id){
            total_product_price+=(order.quantitiy*parseFloat(p_data.product_new_price).toFixed(2));
          }
        });
        
      });
      return total_product_price.toFixed(2);
   /* cartData.order.map((order) => {
      return product_db.map((p_data) => {
        if (p_data.id == order.id) {
          return (
            total_product_price+=(order.quantitiy*p_data.product_new_price),
            console.log(total_product_price)
          );
        }
      });
    })}*/
  

}


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
                            <p>Fiyatı: {p_data.product_new_price} TL</p>
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
        <div className="col-3">
          <div className='card'>
            <div className='card-header'>
              Seçilen ürünler
            </div>
            <div className='card-body'>
              Toplam: {CalculateTotalPrice()} TL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
