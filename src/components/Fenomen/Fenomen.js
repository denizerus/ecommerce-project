import React from 'react';
import './Fenomen_style.css';
import fenomen_items from './fenomen_products.json';
import FenomenCard from './FenomenCard';

export const Fenomen = () => {
  return (
    <div
      className="main_container"
      div
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(https://www.freevector.com/uploads/vector/preview/19739/7-09.jpg)`,
      }}
    >
      <div className="container">
        <h1 className="m-5">Influencer'ın Seçimleri</h1>
        <img
          class="card-img mb-4"
          src="https://i.ibb.co/wrkLXN9/influencer-header.jpg"
          alt="Card image"
          style={{
            'border-radius': '20px',
          }}
        />
        <h5 className="App m-3">
          Son zamanların gözde influencer'ı Merve Yılmaz da alışverişini bizim
          sitemizden yapıyor.
        </h5>
        <h5 className="App m-3">
          Sizler için özellikle seçtiği ürünleri aşağıda bulabilirsiniz.
          Ürünlere ulaşmak için yukarı kaydırın :)
        </h5>
        <hr />
        <div class="row mt-5">
          {fenomen_items.map((fenomen_items) => {
            return <FenomenCard props={fenomen_items} key={fenomen_items.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
