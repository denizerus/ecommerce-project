import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import '../SuperPrice/SuperPrice.css'

const FenomenCard = ({props}) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <div className="col-sm mb-4">
      <div className="card text-center" style={{width: '15rem'}}>
        <div className="card-body">
          <p className="card-title mb-2">{props.fenomen_product_title}</p>
          <img src={props.fenomen_product_img} className="card-img-top" alt="..." />
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            href={props.id}
            className="btn-super-price btn btn-light stretched-link mt-3 mb-1 btn-lg"
          >
            {hover ? "Sepete Ekle" : props.fenomen_product_new_price}
          </Button>
          <p
            style={{
              fontsize: '8px',
              height: '24px',
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
            }}
          >
            {hover ? " " : props.fenomen_product_old_price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FenomenCard;
