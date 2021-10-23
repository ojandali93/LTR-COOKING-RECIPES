import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import RecipeList from './components/RecipeList'
import './css/app.css'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'instr.',
      ingredients: [
        {id: uuidv4(), name: 'Name', amount: '1 Tbs.'}
      ]
    }
  
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeList 
      recipes={recipes} 
      handleRecipeAdd={handleRecipeAdd}
      handleRecipeDelete={handleRecipeDelete}
    />
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on Chicken\n2. Put chicken in oven\n3. Eat Chicken',
    ingredients: [
      {
        id: 1,
        name: 'chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbsp.'
      },
    ]
  },
  {
    id: 2,
    name: 'Herbed Chicken',
    servings: 4,
    cookTime: '3:15',
    instructions: '1. Season the Chicken\n2. Bake the chicken in the oven\n3. Eat Chicken',
    ingredients: [
      {
        id: 1,
        name: 'chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbsp.'
      },
      {
        id: 3,
        name: 'Pepper',
        amount: '1 Tbsp.'
      },
      {
        id: 4,
        name: 'Oil',
        amount: '2.5 Tbsp.'
      },
    ]
  }
]

export default App;
