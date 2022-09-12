import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import '../SuperPrice/SuperPrice.css';
import {useNavigate} from 'react-router-dom';
import useWindowDimensions from '../../context/useWindowDimensions';

const ProductCard = ({props}) => {
  const {width} = useWindowDimensions();
  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/' + props.id;
    navigate(path.toString());
  };

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  if (width > 1080) {
    return (
      <div
        className="card text-center"
        style={{width: '15rem', marginLeft: '1rem'}}
      >
        <div className="card-body">
          <p className="card-title mb-2">{props.product_title}</p>
          <img
            src={props.product_img}
            className="card-img-top fenomen_product_img"
            alt="..."
          />
          <Button
            onClick={routeChange}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="btn-super-price btn btn-light stretched-link mt-3 mb-1 btn-lg"
          >
            {hover ? 'Sepete Ekle' : props.product_new_price}
          </Button>
          <p
            style={{
              fontsize: '8px',
              height: '24px',
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
            }}
          >
            {hover ? ' ' : props.product_old_price}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-sm mb-4 justify-content-center d-flex">
        <div className="row">
          <div className="row">
            <div
              className="card text-center"
              style={{width: '15rem', marginLeft: '1rem'}}
            >
              <div className="card-body">
                <p className="card-title mb-2">{props.product_title}</p>
                <img
                  src={props.product_img}
                  className="card-img-top fenomen_product_img"
                  alt="..."
                />
                <Button
                  onClick={routeChange}
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  className="btn-super-price btn btn-light stretched-link mt-3 mb-1 btn-lg"
                >
                  {hover ? 'Sepete Ekle' : props.product_new_price}
                </Button>
                <p
                  style={{
                    fontsize: '8px',
                    height: '24px',
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',
                  }}
                >
                  {hover ? ' ' : props.product_old_price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductCard;
