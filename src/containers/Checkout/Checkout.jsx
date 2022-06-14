import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {useSelector} from 'react-redux';

import './Checkout.css';

function Checkout() {

  const {ingredients} = useSelector((store) => store.pizza)

  return (
    <div className="checkout">
      <CheckoutSummary ingredients={ingredients}/>
    </div>
  );
}

export default Checkout
