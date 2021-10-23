import React from 'react'
import RecipeIngredientsEdit from './RecipeIngredientsEdit'

export default function RecipeEdit({ recipe }) {
  return (
    <div className="recipe-edit">
      <div>
        <button>&times;</button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={recipe.name}/>
        <label htmlFor="cookTime">CookTime</label>
        <input type="text" name="cookTime" id="cookTime" value={recipe.cookTime}/>
        <label htmlFor="servings">Servings</label>
        <input type="text" name="servings" id="servings" value={recipe.servings}/>
        <label htmlFor="instructions">Instructions</label>
        <textarea type="textarea" name="instructions" id="instructions" value={recipe.instructions}></textarea>
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
          return <RecipeIngredientsEdit key={ingredient.id} ingredient={ingredient}/>
        })}
      </div>
      <div>
        <button>Add Ingredients</button>
      </div>
    </div>
  )
}
