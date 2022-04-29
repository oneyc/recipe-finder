import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react"

const SearchBar = (props) => {
    const ingredientRef = useRef()

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onSetIngredients(ingredientRef.current.value)
        console.log("Submitted", ingredientRef.current.value)
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div className="input-group rounded">
                <input 
                    type="search" 
                    className="form-control rounded" 
                    placeholder="Enter ingredients here" 
                    aria-label="Search" 
                    aria-describedby="search-addon" 
                    ref={ingredientRef}
                />
                <button className="input-group-text border-0" id="search-addon" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </form>
    )
}

export default SearchBar