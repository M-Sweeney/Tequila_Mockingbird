import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function SearchResults ({search, setSearch}) {

  let navigate = useNavigate()

  const showDrink = (drink) => {

    navigate(`/drinks/${drink.strDrink}`)
  }

if(!search) {
  return <h2>Loading Results...</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1>Search results!</h1>
    </div>
    <div className="grid">
        {search.map((drinks) => (
          <div onClick={() => showDrink(drinks)} key={drinks.strDrink} className="card">
            <img className="preview" src={`${drinks.strDrinkThumb}/preview`}  />
            <div className="previewText">
              <h2>{drinks.strDrink}</h2>
              <h3>{drinks.strAlcoholic}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}}


