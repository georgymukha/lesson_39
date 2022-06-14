
import { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import Controls from '../../components/Pizza/Controls/Controls';
import Pizza from '../../components/Pizza/Pizza';
import Modal from '../../components/UI/Modal/Modal';
import {useSelector, useDispatch} from 'react-redux';

import './PizzaBuilder.css';
import { onAdd, onRemove } from '../../store/reducers/pizza.reducer';



function PizzaBuilder() {

  const {ingredients, price} = useSelector((store) => store.pizza);

  const [purchasing, setPurchasing] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const addIngredient = (ingName) => {
    dispatch(onAdd(ingName));
  };

  const removeIngredient = (event, ingName) => {
    event.stopPropagation();
    dispatch(onRemove(ingName));
  };

  const isPurchasable = () => {
    const count = Object.values(ingredients).reduce((acc, value) => {
      return acc + value
    }, 0);

    return count > 0;
  }

  const purchaseCancelled = () => setPurchasing(false);

  return (
    <div className="pizza-wrap">
      <Modal show={purchasing} closed={purchaseCancelled}>
        <OrderInfo
          ingredients={ingredients}
          price={price}
          purchaseCancelled={purchaseCancelled}
          purchaseContinued={() => navigate("/checkout")}
        />
      </Modal>
      <Pizza ingredients={ingredients} />
      <Controls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        price={price}
        purchasable={isPurchasable()}
        ordered={() => setPurchasing(true)}
      />
    </div>
  );
}

export default PizzaBuilder
