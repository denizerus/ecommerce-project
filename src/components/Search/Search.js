import React from 'react';
import {useLocation} from 'react-router-dom';
import ProductCard from '../Product/ProductCard';
import product_db from '../Product/product_db.json';
import useWindowDimensions from '../../context/useWindowDimensions';

export const Search = (props) => {
  const {width} = useWindowDimensions();
  const location = useLocation();
  if (width > 1080) {
    return (
      <div className="container">
        <h1>Product Infos:</h1>
        <div className="col-sm mb-4 justify-content-center d-flex">
          {product_db
            .filter((item) => {
              const searchTerm = location.state.searchTerm.toLowerCase();
              const fullName = item.product_title.toLowerCase();

              return searchTerm && fullName.startsWith(searchTerm);
            })
            .map((item) => {
              return <ProductCard props={item} key={item.id} />;
            })}
        </div>
      </div>
    );
  }else{
    return (
        <div className="container">
          <h1>Product Infos:</h1>
            {product_db
              .filter((item) => {
                const searchTerm = location.state.searchTerm.toLowerCase();
                const fullName = item.product_title.toLowerCase();
  
                return searchTerm && fullName.startsWith(searchTerm);
              })
              .map((item) => {
                return <ProductCard props={item} key={item.id} />;
              })}
        </div>
      );
  }
};
