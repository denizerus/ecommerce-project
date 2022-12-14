import React from 'react';
import './Fenomen_style.css';
import fenomen_items from './fenomen_products.json';
import FenomenCard from './FenomenCard';

export const Fenomen = () => {
  return (
    <React.Fragment>
      <div
        className="main_container"
        style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(https://www.freevector.com/uploads/vector/preview/19739/7-09.jpg)`,
        }}
      >
        <div className="container">
          <h1 className="ml-1 mt-2 mb-2">Influencer'ın Seçimleri</h1>
          <img
            className="card-img mb-4"
            src="https://i.ibb.co/wrkLXN9/influencer-header.jpg"
            alt="fenomen_campaign"
            style={{
              borderRadius: '20px',
            }}
          />
          <h5 className="m-3" style={{textAlign: "center"}}>Son zamanların gözde influencer'ı Lorem Ipsum da alışverişini bizim sitemizden yapıyor.</h5>
          <h5 className="m-3" style={{textAlign: "center"}}>Sizler için özellikle seçtiği ürünleri aşağıda bulabilirsiniz.</h5>
          <hr />
          <div className="row mt-5" style={{justifyContent: "center"}}>
            {fenomen_items.map((fenomen_items) => {
              return (
                <FenomenCard props={fenomen_items} key={fenomen_items.id}  />
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
