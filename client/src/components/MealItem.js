import React from 'react'

const MealItem = (getMeal) => {
    console.log(getMeal.data)
  return (
   <>
   <div className='card'>
    <img src={getMeal.data.strMealThumb}/>
    <div className='info'>
<h3>{getMeal.data.strMeal}</h3>


    </div>
    <div className='recipe'>
<h4>Recipe</h4>
<p>{getMeal.data.strInstructions}</p>
<img src={getMeal.data.strMealThumb}/>
<a href={getMeal.data.strSource}>Watch video </a>
    </div>
    </div></>
  )
}

export default MealItem