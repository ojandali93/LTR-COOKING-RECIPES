import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import RecipeList from './components/RecipeList'
import RecipeEdit from './components/RecipeEdit'
import './css/app.css'

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'lte-recipes.recipes'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  useEffect(() => {
    const recipeJSOM = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSOM != null) setRecipes(JSON.parse(recipeJSOM))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeSelect(id){
    setSelectedRecipeId(id)
  }

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

  function handleRecipeChange(id, recipe){
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
    </RecipeContext.Provider>
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
