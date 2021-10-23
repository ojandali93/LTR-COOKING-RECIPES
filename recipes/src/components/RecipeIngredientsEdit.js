import React from 'react'

export default function RecipeIngredientsEdit({ ingredient }) {
  return (
    <>
      <input className="recipe-edit__input" type="text" value={ingredient.name}/>
      <input className="recipe-edit__input" type="text" value={ingredient.amount}/>
      <button>&times;</button>
    </>
  )
}
