import React from 'react';
import SanaOzel from './SanaOzel';
import promotion_info from './promotions.json'

export const Promotions = () => {
  return (
    <React.Fragment>
        <SanaOzel props={promotion_info}/>
    </React.Fragment>
  );
};
