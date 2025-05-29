import React from 'react'

const RecipeCard = ({food}) => {
  return (
    <div className='recipe-card'>
      <img src={food.image} alt="" />
      <h1>{food.name}</h1>
      <p>{food.cuisine}</p>
      <span>{food.mealType}</span>
    </div>
  )
}

export default RecipeCard;
