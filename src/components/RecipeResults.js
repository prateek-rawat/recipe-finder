import React from "react"
import { v4 as uuidv4 } from 'uuid';
import "../css/recipeResults.css"

const RecipeResults = (props) => {

    {
        if (props.more === false) {
            return (<p className="no-results-para">No Results Found :(</p>)
        }

        else {
            return (
                <div className="all-results-div">
                    {props.recipes.map((item) => {
                        return (
                            <div className="result-div" key={uuidv4()}>
                                <h1 className="recipe-name-head">{item.recipe.label}</h1>
                                <img className="recipe-image" src={item.recipe.image} alt="image" />
                                <h2 className="calories-head">Calories:{item.recipe.calories}</h2>
                                <h3 className="ingredients-heading">Ingredients:</h3>
                                <ul>
                                    {item.recipe.ingredientLines.map((ingredient) => {
                                        return <li className="ingredient-list-item" key={uuidv4()}>{ingredient}</li>
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}

export default RecipeResults;