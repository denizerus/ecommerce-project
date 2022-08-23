import './App.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import Header from './components/Header/Header';
import {Promotions} from './components/Promotions/Promotions';
import SuperPrice from './components/SuperPrice/SuperPrice';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <NavBarComponent />
      </div>
      <Promotions />
      <div className="App">
        <SuperPrice />
      </div>
    </React.Fragment>
  );
}

export default App;
