import React from 'react';
import './SuperPrice.css';
import SuperPriceCard from './SuperPriceCard';
import super_price_info from './SuperPrice.json';
import Carousel from 'better-react-carousel';

const SuperPrice = () => {
  return (
    <div className="super_price_container">
      <h1>Süper Fiyat, Süper Teklif</h1>

      <div className="container mt-4">
        <div className="row">
          <Carousel cols={4} rows={1} gap={0} loop>
            {super_price_info.map((super_price_info) => {
              return (
                <Carousel.Item key={super_price_info.id}>
                  <SuperPriceCard
                    props={super_price_info}
                    key={super_price_info.id}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SuperPrice;
