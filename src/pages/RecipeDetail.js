import { Fragment } from "react";
import image01 from "../assets/curry-chickpeas.jpg"
import classes from "./RecipeDetail.module.css"

const RecipeDetails = () => {
    return(
        <Fragment>
            <figure>
                <img src={image01} className={classes["header-image"]} alt="Responsive image"></img>
            </figure>
            <div className="bg-secondary">
                <div className="container pb-4">
                    <section>
                        <h1 className="pt-4">Curry chickpeas</h1>
                        <p className="pt-3">This easy chickpea curry, created by reader Jon Gregg, is a vegan recipe that's three of your five-a-day. It works well as a main course or a simple side dish</p>
                        <ul>
                            <li>Chickpeas</li>
                            <li>Curry</li>
                        </ul>
                    </section>
                </div>
            </div>
            <div className="container pt-4">
                <section>
                    <h2 className="pb-4">Recipes</h2>
                    <h4>
                        Step 1
                    </h4>
                    <p>
                        To make the paste, heat a little of the 2 tbsp oil in a frying pan, add 1 diced onion and 1 tsp fresh or dried chilli, and cook until softened, about 8 mins.
                    </p>
                    <h4>
                        Step 2
                    </h4>
                    <p>
                        In a food processor, combine 9 garlic cloves, a thumb-sized piece of peeled ginger and the remaining oil, then add 1 tbsp ground coriander, 2 tbsp ground cumin, 1 tbsp garam masala, 2 tbsp tomato purée, ½ tsp salt and the fried onion. Blend to a smooth paste – add a drop of water or more oil, if needed.                    </p>
                </section>
            </div>
        </Fragment>
    )
}

export default RecipeDetails;