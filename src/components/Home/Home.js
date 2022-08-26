import React from 'react';
import { Promotions } from '../Promotions/Promotions';
import SuperPrice from '../SuperPrice/SuperPrice';

export const Home = () => {
  return (
    <React.Fragment>
      <Promotions />
      <div className="App">
        <SuperPrice/>
      </div>
    </React.Fragment>
  );
};
