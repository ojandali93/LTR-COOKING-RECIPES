import React, { useContext } from 'react'
import RecipeIngredientsEdit from './RecipeIngredientsEdit'
import { RecipeContext } from '../App'
import { v4 as uuidv4 } from 'uuid'

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)

  function handleChange(changes){
    handleRecipeChange(recipe.id, { ...recipe, ...changes})
  }

  function handleIngredientChange(id, ingredient){
    const newIngredients = [...recipe.ingredients]
    const index = newIngredients.findIndex(i => i.id === id)
    newIngredients[index] = ingredient
    handleChange({ ingredients: newIngredients })
  }

  function handleIngredientAdd(){
    const newIngredient = {
      id: uuidv4(),
      name: '',
      amount: ''
    }
    handleChange({ ingredients: [...recipe.ingredients, newIngredient]})
  }

  function handleIngredientDelete(id){
    handleChange({ ingredients: recipe.ingredients.filter(i => i.id !== id)})
  }
   
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button onClick={() => handleRecipeSelect(undefined)} className="btn recipe-edit__remove-button">&times;</button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onInput={e => handleChange({name: e.target.value})} value={recipe.name}/>
        <label htmlFor="cookTime">CookTime</label>
        <input type="text" name="cookTime" id="cookTime" onInput={e => handleChange({cookTime: e.target.value})} value={recipe.cookTime}/>
        <label htmlFor="servings">Servings</label>
        <input type="text" name="servings" id="servings" onInput={e => handleChange({servings: parseInt(e.target.value) || ''})} value={recipe.servings}/>
        <label htmlFor="instructions">Instructions</label>
        <textarea type="textarea" name="instructions" id="instructions" onInput={e => handleChange({cookTime: e.target.value})} value={recipe.instructions}></textarea>
      </div>
      <br/>
      <label>
        Ingredients
      </label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map(ingredient => {
          return <RecipeIngredientsEdit key={ingredient.id} handleIngredientChange={handleIngredientChange} handleIngredientDelete={handleIngredientDelete} ingredient={ingredient}/>
        })}
      </div>
      <div>
        <button onClick={() => handleIngredientAdd()}>Add Ingredients</button>
      </div>
    </div>
  )
}
