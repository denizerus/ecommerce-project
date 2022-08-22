import React from 'react';
import './Promotions.css';

const SanaOzel = ({props}) => {
  return (
    <div
      style={{
        backgroundImage: `url("${props.campaign_bg_img}")`,
      }}
    >
      <div className="container mt-3">
        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <div className="card mt-3 mb-3 border border-radius">
              <div className="row no-gutters">
                <div className="col">
                  <img
                    src={props.campaign_img}
                    className="img-fluid border border-radius"
                    alt=""
                  />
                </div>
                <div className="col-5">
                  <div className="card-block px-2">
                    <h4 className="card-title mt-4">{props.campaign_title}</h4>
                    <p className="card-text">{props.campaign_text}</p>
                    <a href="#" className="btn btn-primary">
                      FIRSATLARI YAKALA
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-footer w-100 text-muted">
                <p style={{fontSize: '10px'}}>{props.campaign_footer}</p>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
};

export default SanaOzel;
