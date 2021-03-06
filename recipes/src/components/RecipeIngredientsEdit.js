import React from 'react'

export default function RecipeIngredientsEdit(props) {
  const {
    ingredient,
    handleIngredientChange,
    handleIngredientDelete
  } = props

  function handleChange(changes){
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes})
  }

  return (
    <>
      <input className="recipe-edit__input" type="text" onInput={e => handleChange({ name: e.target.value })} value={ingredient.name}/>
      <input className="recipe-edit__input" type="text" onInput={e => handleChange({ amount: e.target.value })} value={ingredient.amount}/>
      <button onClick={() => handleIngredientDelete(ingredient.id)}>&times;</button>
    </>
  )
}
