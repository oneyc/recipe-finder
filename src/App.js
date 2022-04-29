import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MainSearch from './pages/MainSearch';
import SearchResults from './pages/SearchResults';
import RecipeDetails from './pages/RecipeDetail';
import { Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" exact>
          <Redirect to="/search">
          </Redirect>
        </Route>
        <Route path="/search">
          <MainSearch/>
        </Route>
        <Route path="/results" exact>
          <SearchResults/>
        </Route>
        <Route path="/recipe:recipeId" exact>
          <RecipeDetails/>
        </Route>
      </header>
    </div>
  );
}

export default App;
