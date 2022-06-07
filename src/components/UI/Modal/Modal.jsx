import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

function Modal({children, show, closed}) {
  let modalClasses = ['modal'];

  if(show) modalClasses.push('show');

  return (
    <React.Fragment>
      <Backdrop show={show} closed={closed}/>
      <div className={modalClasses.join(' ')}>
        {children}
      </div>
    </React.Fragment>
  )
}

export default Modal
