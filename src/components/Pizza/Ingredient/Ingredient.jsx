import React from 'react'

function Ingredient({type}) {
  return (
    <img src={`img/${type}.png`} alt={type} />
  )
}

export default Ingredient
