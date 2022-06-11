import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaPizzaSlice, FaDolly } from 'react-icons/fa';

import './Navigation.css';

function Navigation() {
  return (
    <div className="toolbar-nav">
      <NavLink to="/" className="toolbar-nav__link">
        <FaPizzaSlice/>
        <span>Конструктор пиццы</span>
      </NavLink>
      <NavLink to="/orders" className="toolbar-nav__link">
        <FaDolly/>
        <span>Заказы</span>
      </NavLink>
    </div>
  );
}

export default Navigation
