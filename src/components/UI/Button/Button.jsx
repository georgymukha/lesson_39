import React from 'react';

import './Button.css';

function Button({children, type, clicked}) {
  let btnClasses = ['btn']; // ['btn', 'btn-danger'] = 'btn btn-danger'
  if(type) {
    btnClasses.push(type);
  }
  return (
    <button onClick={clicked} className={btnClasses.join(' ')}>
      {children}
    </button>
  )
}

export default Button
