import React from 'react';

import './Backdrop.css';

const Backdrop = ({show, closed}) => show && <div onClick={closed} className="back-drop"/>

export default Backdrop
