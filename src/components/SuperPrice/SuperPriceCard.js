import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import './SuperPrice.css';
import {useNavigate} from 'react-router-dom';

const SuperPriceCard = ({props}) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = props.id;
    navigate(path.toString());
  };
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <React.Fragment>
      <div className="col-sm">
        <div className="card text-center" style={{width: '15rem'}}>
          <div className="card-body">
            <p className="card-title mb-2">{props.super_price_title}</p>
            <img
              src={props.super_price_img}
              className="card-img-top"
              alt="..."
            />
            <Link to={'/' + props.id}>
              <Button
                // onClick={routeChange}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                className="btn-super-price btn btn-light stretched-link mt-3 mb-1 btn-lg"
              >
                {hover ? 'Sepete Ekle' : props.super_price_new_price}
              </Button>
            </Link>
            <p
              style={{
                fontsize: '8px',
                height: '24px',
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              }}
            >
              {hover ? ' ' : props.super_price_old_price}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SuperPriceCard;
