import React, {useState} from 'react';
import SinglePromotion from './SinglePromotion';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './SanaOzel.css';

const SanaOzel = (props) => {
  const [current, setCurrent] = useState(0);
  const length = 4;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {props.cards.map((card) => {
        return (
          card.campaign_details.map((campaign_component) => {
            return (
              <div className={campaign_component.id === current ? 'slide_active' : 'slide'} key={campaign_component.id}>
                {campaign_component.id === current && (<SinglePromotion props={campaign_component} key={campaign_component.id} />)}
              </div>
            );
          })
        );
      })}
    </section>

    // props.cards.map((card) => {
    //   return (
    //     console.log(card.campaign_details),
    //     card.campaign_details.map((campaign_component) => {
    //       return <SinglePromotion props={campaign_component} key={card.id} />;
    //     })
    //   );
    // })
  );
};

export default SanaOzel;
