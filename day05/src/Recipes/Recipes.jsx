import React from 'react'
import Recipedata from "/src/Recipes/Recipedata.jsx"
import RecipeCard from '/src/Recipes/Recipecard.jsx'
import './Recipes.css'

const Recipes = () => {
  return (
    <div id='recipes'>
      <h1>RECIPES</h1>
      <div id='recipe-container'>
        {Recipedata.map((recipe, index) => {
          return (
            <RecipeCard food={recipe}/>
          );
        })}
      </div>
    </div>
  )
}

export default Recipes;
