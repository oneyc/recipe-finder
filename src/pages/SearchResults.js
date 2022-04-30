import { Fragment, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import SearchBar from "../components/SearchBar"
import classes from "./SearchResults.module.css"

const DUMMY_DATA = [
    {
        "id": 73420,
        "image": "https://spoonacular.com/recipeImages/73420-312x231.jpg",
        "imageType": "jpg",
        "likes": 0,
        "missedIngredientCount": 3,
        "missedIngredients": [
            {
                "aisle": "Baking",
                "amount": 1.0,
                "id": 18371,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
                "meta": [],
                "name": "baking powder",
                "original": "1 tsp baking powder",
                "originalName": "baking powder",
                "unit": "tsp",
                "unitLong": "teaspoon",
                "unitShort": "tsp"
            },
            {
                "aisle": "Spices and Seasonings",
                "amount": 1.0,
                "id": 2010,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
                "meta": [],
                "name": "cinnamon",
                "original": "1 tsp cinnamon",
                "originalName": "cinnamon",
                "unit": "tsp",
                "unitLong": "teaspoon",
                "unitShort": "tsp"
            },
            {
                "aisle": "Milk, Eggs, Other Dairy",
                "amount": 1.0,
                "id": 1123,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
                "meta": [],
                "name": "egg",
                "original": "1 egg",
                "originalName": "egg",
                "unit": "",
                "unitLong": "",
                "unitShort": ""
            }
        ],
        "title": "Apple Or Peach Strudel",
        "unusedIngredients": [],
        "usedIngredientCount": 1,
        "usedIngredients": [
            {
                "aisle": "Produce",
                "amount": 6.0,
                "id": 9003,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
                "meta": [],
                "name": "apples",
                "original": "6 large baking apples",
                "originalName": "baking apples",
                "unit": "large",
                "unitLong": "larges",
                "unitShort": "large"
            }
        ]
    },
    {
        "id": 632660,
        "image": "https://spoonacular.com/recipeImages/632660-312x231.jpg",
        "imageType": "jpg",
        "likes": 3,
        "missedIngredientCount": 4,
        "missedIngredients": [
            {
                "aisle": "Milk, Eggs, Other Dairy",
                "amount": 1.5,
                "extendedName": "unsalted butter",
                "id": 1001,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
                "meta": [
                    "unsalted",
                    "cold"
                ],
                "name": "butter",
                "original": "1 1/2 sticks cold unsalted butter cold unsalted butter<",
                "originalName": "cold unsalted butter cold unsalted butter<",
                "unit": "sticks",
                "unitLong": "sticks",
                "unitShort": "sticks"
            },
            {
                "aisle": "Produce",
                "amount": 4.0,
                "id": 1079003,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/red-delicious-apples.png",
                "meta": [
                    "red",
                    " such as golden delicious, peeled, cored and cut into 1/4-inch-thick slices "
                ],
                "name": "red apples",
                "original": "4 larges red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
                "originalName": "s red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
                "unit": "large",
                "unitLong": "larges",
                "unitShort": "large"
            },
            {
                "aisle": "Spices and Seasonings",
                "amount": 2.0,
                "id": 2010,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
                "meta": [],
                "name": "cinnamon",
                "original": "2 teaspoons cinnamon",
                "originalName": "cinnamon",
                "unit": "teaspoons",
                "unitLong": "teaspoons",
                "unitShort": "tsp"
            },
            {
                "aisle": "Nut butters, Jams, and Honey",
                "amount": 2.0,
                "id": 19719,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apricot-jam.jpg",
                "meta": [
                    "melted"
                ],
                "name": "apricot preserves",
                "original": "2 tablespoons apricot preserves, melted and strained",
                "originalName": "apricot preserves, melted and strained",
                "unit": "tablespoons",
                "unitLong": "tablespoons",
                "unitShort": "Tbsp"
            }
        ],
        "title": "Apricot Glazed Apple Tart",
        "unusedIngredients": [
            {
                "aisle": "Produce",
                "amount": 1.0,
                "id": 9003,
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
                "meta": [],
                "name": "apples",
                "original": "apples",
                "originalName": "apples",
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving"
            }
        ],
        "usedIngredientCount": 0,
        "usedIngredients": []
    }
]

const SearchResults = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( ()=> {
        
        const sendRequest = async function fetchDataHandler(){
            setIsLoading(true);
            const response = await fetch('https://swapi.dev/api/films/');
            const data = await response.json();

            console.log(data);
            const transformedRecipeData = DUMMY_DATA.map((recipeData) => {
                return {
                    title: recipeData.title,
                    missedIngredientCount: recipeData.missedIngredientCount,
                    missedIngredients: recipeData.missedIngredients,
                    usedIngredientCount: recipeData.usedIngredientCount,
                    usedIngredients: recipeData.usedIngredients,
                    image: recipeData.image
                }
            });
            setRecipes(transformedRecipeData);
            setIsLoading(false);
        }
        
        sendRequest();
    }, [])

    const recipePrinter = recipes.map((data) => {
            return(
                <div className="col-6 col-sm-6 col-md-4">
                <Card>
                    <div className="">
                        <Card.Img variant="top" src={data.image} className={`rounded-3 ${classes.squareImage}`} />
                    </div>
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                        You Have: {data.usedIngredients.map((data)=>{
                            return data.name + ", "
                        })
                    }
                        </Card.Text>
                        <Card.Text>
                        You Need: {data.missedIngredients.map((data)=>{
                            return data.name + ", "
                        })
                    }                        
                    </Card.Text>
                        <Button variant="primary">View recipe</Button>
                    </Card.Body>
                </Card>
            </div>
            )
        }
    )

    //https://developer.edamam.com/edamam-docs-recipe-api
    //https://spoonacular.com/food-api/docs

    return(
        <Fragment>
            {console.log("Props", props.ingredientsData)}
            <div className="container mt-5">
                <SearchBar/>
            </div>
            {isLoading ? <h1>Loading</h1> :
                <div className="container mt-5">
                    <div className="row gy-4">
                        {recipePrinter}
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default SearchResults;