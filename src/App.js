import './App.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import Header from './components/Header/Header'
import { Promotions } from './components/Promotions/Promotions';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBarComponent />
      <Promotions />
    </div>
  );
}

export default App;
