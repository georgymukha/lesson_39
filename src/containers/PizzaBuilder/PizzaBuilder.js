
import { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import Controls from '../../components/Pizza/Controls/Controls';
import Pizza from '../../components/Pizza/Pizza';
import Modal from '../../components/UI/Modal/Modal';

import './PizzaBuilder.css';

const PRICES = {
  cheese: 20,
  olives: 30,
  sausage: 45,
  mushrooms: 35,
};

function PizzaBuilder() {
  const [ingredients, setIngredients] = useState({
    cheese: 0,
    olives: 0,
    sausage: 0,
    mushrooms: 0,
  });

  const [price, setPrice] = useState(100);

  const [purchasable, setPurchasable] = useState(false);

  const [purchasing, setPurchasing] = useState(false);

  const navigate = useNavigate();

  const addIngredient = (ingName) => {
    const copyIngs = {
      ...ingredients,
      [ingName]: ingredients[ingName] + 1
    };

    setIngredients(copyIngs);

    setPrice(price => price + PRICES[ingName]); // 100 + 30

    updatePurchasable(copyIngs);
  };

  const removeIngredient = (event, ingName) => {
    event.stopPropagation();
    const copyIngs = {
      ...ingredients,
      [ingName]: ingredients[ingName] - 1,
    };

    setIngredients(copyIngs);

    setPrice((price) => price - PRICES[ingName]); // 100 + 30
    updatePurchasable(copyIngs);
  };

  const updatePurchasable = (ings) => {
    const count = Object.values(ings).reduce((acc, value) => {
      return acc + value
    }, 0);

    setPurchasable(count > 0);
  }

  const purchaseCancelled = () => setPurchasing(false);

  const purchaseContinued = () => {
    navigate({
      pathname: "/checkout",
      search: "?" + createSearchParams(ingredients)
    });
  }

  return (
    <div className="pizza-wrap">
      <Modal show={purchasing} closed={purchaseCancelled}>
        <OrderInfo
          ingredients={ingredients}
          price={price}
          purchaseCancelled={purchaseCancelled}
          purchaseContinued={purchaseContinued}
        />
      </Modal>
      <Pizza ingredients={ingredients} />
      <Controls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        price={price}
        purchasable={purchasable}
        ordered={() => setPurchasing(true)}
      />
    </div>
  );
}

export default PizzaBuilder
