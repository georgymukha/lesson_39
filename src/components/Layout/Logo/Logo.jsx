import React from 'react';
import './Logo.css';
import logoImg from './logo.png';

function Logo() {
  return (
    <div className='logo'>
      <img className='logo__img' src={logoImg} alt="Конструктор пиццы" />
    </div>
  )
}

export default Logo
