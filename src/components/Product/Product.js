import React from 'react'
import { useLocation, useNavigate  } from 'react-router-dom';

export const Product = () => {
    const location = useLocation();
    let productID = location.pathname.substring(1);
    return ( 
        <div>
            <h1>Ürün</h1>
            <h1>Current pathname: {productID}</h1>
        </div>
    )
}