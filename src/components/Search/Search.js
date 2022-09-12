import React from 'react';
import {useLocation} from 'react-router-dom';
import product_db from '../Product/product_db.json';

export const Search = (props) => {
  const location = useLocation();
  console.log(location);

  //   return <h1>Props: {location.state.searchTerm}</h1>;
  return (
    <div className='container'>
      <h1>Product Infos:</h1>
      {product_db
        .filter((item) => {
          const searchTerm = location.state.searchTerm.toLowerCase();
          const fullName = item.product_title.toLowerCase();

          return searchTerm && fullName.startsWith(searchTerm);
        })
        .map((item) => {
          return <div key={item.id}>
            <p>item id: {item.id}</p>
            <p>item title: {item.product_title}</p>
            </div>;
        })}
    </div>
  );
};
