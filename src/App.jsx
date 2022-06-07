import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";
import Checkout from "./containers/Checkout/Checkout";

import {Routes, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PizzaBuilder/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </>
  )
}

export default App;
