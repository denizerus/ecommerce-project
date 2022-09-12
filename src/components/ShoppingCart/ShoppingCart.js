import React from 'react';
import {CartContext, useContext} from '../../context/ShoppingCartContext';
import product_db from '../Product/product_db.json';
import './ShoppingCard_Style.css';
import useWindowDimensions from '../../context/useWindowDimensions';

export const ShoppingCart = () => {
  const {width} = useWindowDimensions();

  const {cartData, setCartData} = useContext(CartContext);

  function CalculateTotalProduct() {
    var total_product_price = 0;

    cartData.order.forEach((order) => {
      product_db.forEach((p_data) => {
        if (p_data.id === order.id) {
          total_product_price += order.quantitiy;
        }
      });
    });

    return total_product_price;
  }

  function CalculateTotalPrice() {
    var total_product_price = 0;

    cartData.order.forEach((order) => {
      product_db.forEach((p_data) => {
        if (p_data.id === order.id) {
          total_product_price +=
            order.quantitiy * parseFloat(p_data.product_new_price).toFixed(2);
        }
      });
    });

    return total_product_price
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  if (CalculateTotalProduct() === 0){
    return (
      <div className='container'>
        <h5 style={{marginTop: '1rem'}}>Sepetinizde ürün bulunmamaktadır.</h5>
      </div>
    )
  }else{

  if (width > 1080) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <h2>Sepetim</h2>
            <div className="card">
              <ul className="list-group list-group-flush">
                {cartData.order.map((order) => {
                  return product_db.map((p_data) => {
                    if (p_data.id === order.id) {
                      return (
                        <li className="list-group-item" key={p_data.id}>
                          <div className="row cart_item_container">
                            <div className="col-2">
                              <img
                                src={p_data.product_img}
                                alt={p_data.product_title}
                                className="cart_img"
                              />
                            </div>

                            <div className="col-9">
                              <h5 className="mt-2">{p_data.product_title}</h5>
                              <h5 className="mt-4">
                                {p_data.product_new_price} TL
                              </h5>
                            </div>
                            <div className="col-1">
                              <div className="row text-center">
                                <button
                                  onClick={() => {
                                    const newCartData = cartData.order.map(
                                      (obj) => {
                                        if (obj.id === order.id) {
                                          return {
                                            ...obj,
                                            quantitiy: order.quantitiy + 1,
                                          };
                                        }
                                        return obj;
                                      }
                                    );
                                    setCartData((prevState) => ({
                                      order: newCartData,
                                    }));
                                  }}
                                  className="btn btn-warning mb-1"
                                  style={{
                                    color: 'white',
                                    backgroundColor: '#ff6000',
                                  }}
                                >
                                  +
                                </button>
                                <p style={{padding: '0px', margin: '0px'}}>
                                  {order.quantitiy}
                                </p>
                                <button
                                  onClick={() => {
                                    const newCartData = cartData.order.map(
                                      (obj) => {
                                        if (obj.id === order.id) {
                                          if (order.quantitiy > 1) {
                                            return {
                                              ...obj,
                                              quantitiy: order.quantitiy - 1,
                                            };
                                          } else {
                                            return {
                                              ...cartData.order.filter(
                                                (item) => item.id !== order.id
                                              ),
                                            };
                                          }
                                        }
                                        return obj;
                                      }
                                    );
                                    setCartData((prevState) => ({
                                      order: newCartData,
                                    }));
                                  }}
                                  className="btn btn-warning mt-1"
                                  style={{
                                    color: 'white',
                                    backgroundColor: '#ff6000',
                                  }}
                                >
                                  -
                                </button>
                              </div>
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
            <div className="card mt-3 text-center">
              <div
                className="card-header"
                style={{color: '#ff6000', fontWeight: 'bold'}}
              >
                SEÇİLEN ÜRÜNLER
              </div>

              <div className="card-body h3">
                <div className="text-center">{CalculateTotalPrice()} TL</div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-warning mt-3"
                    style={{
                      color: 'white',
                      backgroundColor: '#ff6000',
                      width: 'auto',
                    }}
                  >
                    Alışverişi tamamla
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    ///////////////////////// IF MOBILE DEVICE
    return (
      <div className="container">
        <div className="row">
          <h2>Sepetim</h2>
          <div className="card">
            <ul className="list-group list-group-flush">
              {cartData.order.map((order) => {
                return product_db.map((p_data) => {
                  if (p_data.id === order.id) {
                    return (
                      <li className="list-group-item" key={order.id}>
                        <div className="row cart_item_container">
                          <div className="col-3">
                            <img
                              src={p_data.product_img}
                              alt={p_data.product_title}
                              className="cart_img"
                            />
                          </div>

                          <div className="col-7">
                            <h5 className="mt-2">{p_data.product_title}</h5>
                            <h5 className="mt-4">
                              {p_data.product_new_price} TL
                            </h5>
                          </div>
                          <div className="col-2">
                            <div className="row text-center">
                              <button
                                onClick={() => {
                                  const newCartData = cartData.order.map(
                                    (obj) => {
                                      if (obj.id === order.id) {
                                        return {
                                          ...obj,
                                          quantitiy: order.quantitiy + 1,
                                        };
                                      }
                                      return obj;
                                    }
                                  );
                                  setCartData((prevState) => ({
                                    order: newCartData,
                                  }));
                                }}
                                className="btn btn-warning mb-1"
                                style={{
                                  color: 'white',
                                  backgroundColor: '#ff6000',
                                }}
                              >
                                +
                              </button>
                              <p style={{padding: '0px', margin: '0px'}}>
                                {order.quantitiy}
                              </p>
                              <button
                                onClick={() => {
                                  const newCartData = cartData.order.map(
                                    (obj) => {
                                      if (obj.id === order.id) {
                                        if (order.quantitiy > 1) {
                                          return {
                                            ...obj,
                                            quantitiy: order.quantitiy - 1,
                                          };
                                        } else {
                                          return {
                                            ...cartData.order.filter(
                                              (item) => item.id !== order.id
                                            ),
                                          };
                                        }
                                      }
                                      return obj;
                                    }
                                  );
                                  setCartData((prevState) => ({
                                    order: newCartData,
                                  }));
                                }}
                                className="btn btn-warning mt-1"
                                style={{
                                  color: 'white',
                                  backgroundColor: '#ff6000',
                                }}
                              >
                                -
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  }
                });
              })}
            </ul>
          </div>
          <div className="card mt-2 text-center">
            <div className="card-header">Seçilen ürünler</div>
            <div className="card-body h3">
              <div className="text-center">{CalculateTotalPrice()} TL</div>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-warning mt-3"
                  style={{
                    color: 'white',
                    backgroundColor: '#ff6000',
                    width: 'auto',
                  }}
                >
                  Alışverişi tamamla
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
};
