import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

const MainSearch = (props) => {

    const setIngredientsHandler = (data) => {
        props.onSetIngredientsApp(data)
    }

    return(
        <div className="container-sm d-flex flex-column min-vh-100 justify-content-center">
            <h1 className="text-start">What would you like to have today?</h1>
            <h4 className="text-start text-secondary">Find any recipes today!</h4>
            <h6 className="text-start text-secondary">Seperate ingredients with comma</h6>
            <div className="mt-2">
                <SearchBar onSetIngredients = {setIngredientsHandler}/>
            </div>
        </div>
    )
}

export default MainSearch;