import RecipeList from './components/RecipeList'

function App() {
  return (
    <RecipeList recipes={sampleRecipes}/>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on Chicken\n2. Put chicken in oven\n3. Eat Chicken'
  },
  {
    id: 2,
    name: 'Herbed Chicken',
    servings: 4,
    cookTime: '3:15',
    instructions: '1. Season the Chicken\n2. Bake the chicken in the oven\n3. Eat Chicken'
  }
]

export default App;
