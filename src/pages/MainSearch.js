import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const MainSearch = (props) => {

    const history = useHistory();

    const setIngredientsHandler = (searchData) => {
        props.onSetIngredientsApp(searchData)
        if (searchData){
            history.push(`/results/?search=${searchData}`)
        }
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