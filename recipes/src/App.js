import RecipeList from './components/RecipeList'
import './css/app.css'

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
