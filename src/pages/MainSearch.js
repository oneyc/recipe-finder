import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

const MainSearch = () => {

    const[ingredients, setIngredients] = useState(["default ingredients"])

    const setIngredientsHandler = (data) => {
        const ingredientListSeperated = data.split(',');
        setIngredients(ingredientListSeperated);
    }

    return(
            <div className="container-sm d-flex flex-column min-vh-100 justify-content-center">
                {console.log(ingredients)}
                <h1 className="text-start">What do you have in the fridge?</h1>
                <h4 className="text-start text-secondary">Find recipe based on ingredients!</h4>
                <h6 className="text-start text-secondary">Seperate ingredients with comma</h6>
                <SearchBar onSetIngredients = {setIngredientsHandler}/>
            </div>
    )
}

export default MainSearch;