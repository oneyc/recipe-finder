import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState } from 'react';
import MainSearch from './pages/MainSearch';
import SearchResults from './pages/SearchResults';
import RecipeDetails from './pages/RecipeDetail';
import { Route, Redirect } from 'react-router-dom';

function App() {
  const[ingredients, setIngredients] = useState(["default ingredients"])

  const setIngredientsHandler = (data) => {
    const ingredientListSeperated = data.split(',');
    console.log("App.js", ingredientListSeperated)
    setIngredients(ingredientListSeperated);
}

  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" exact>
          <Redirect to="/search">
          </Redirect>
        </Route>
        <Route path="/search">
          <MainSearch onSetIngredientsApp={setIngredientsHandler}/>
        </Route>
        <Route path="/results" exact>
          <SearchResults ingredientsData={ingredients}/>
        </Route>
        <Route path="/recipe:recipeId" exact>
          <RecipeDetails/>
        </Route>
      </header>
    </div>
  );
}

export default App;
