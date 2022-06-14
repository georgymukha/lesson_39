import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";
import Checkout from "./containers/Checkout/Checkout";
import ContactData from "./containers/ContactData/ContactData";
import Layout from "./components/Layout/Layout";

import {Routes, Route} from 'react-router-dom';

import './App.css';
import Orders from "./containers/Orders/Orders";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<PizzaBuilder />} />
          <Route path="/checkout" element={<Checkout />}>
            <Route path="contact-data" element={<ContactData />} />
          </Route>
          <Route path="/orders" element={<Orders/>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
