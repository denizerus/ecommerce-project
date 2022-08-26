/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Promotions.css';

const SinglePromotion = ({props}) => {
  return (
    <div className="single_promotion_container">
      <div
        style={{
          backgroundImage: `url("${props.campaign_bg_img}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container" style={{background:"transparent"}}>
          <div className="row">
            <div className="col">
              <div className="card mt-3 mb-3 border border-radius" style={{marginLeft: "10%", marginRight: "10%"}}>
                <div className="row no-gutters">
                  <div className="col">
                    <img
                      src={props.campaign_img}
                      className="img-fluid border border-radius"
                      alt=""
                    />
                  </div>
                  <div className="col-5 d-flex align-items-center justify-content-center">
                    <div className="card-block justify-content-center align-self-center">
                      <h4 className="card-title">
                        {props.campaign_title}
                      </h4>
                      <p className="card-text">{props.campaign_text}</p>
                      <a href={props.campaign_link} className="btn btn-primary">
                      {props.campaign_btn_text}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-footer w-100 text-muted">
                  <p style={{fontSize: '10px'}}>{props.campaign_footer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePromotion;
