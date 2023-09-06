import React from 'react'
import MealItem from './MealItem'
import { useState } from "react";
const Search = () => {
  const [search, setSearch] = useState("");
  const [Mymeal, setMeal] = useState();
  const searchMeal = (evt) => {
    if (evt.key == "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res => res.json()).then(data => { setMeal(data.meals); setSearch("") })
    }
  }
  return (
    <>
      <div className='main'>
        <div className='heading'>
          <h2>"Search Your Food Recipe"
        </h2>
          <h4><i>“A recipe has no soul. You, as the cook, must bring soul to the recipe.”</i></h4>
        </div>
        <div className='searchBox'>
          <input type="search" placeholder="Search your Recipe..."className='search-bar' onChange={(e) => setSearch(e.target.value)} value={search} onKeyPress={searchMeal} />
        </div>
        <div className='container'>
          {
            (Mymeal == null) ? <p className="notSearch">Not found</p> :
              Mymeal.map((res) => {
                return (
                  <MealItem data={res} />)
                }
            )
          }
        </div>
      </div>


    </>
  )
}

export default Search