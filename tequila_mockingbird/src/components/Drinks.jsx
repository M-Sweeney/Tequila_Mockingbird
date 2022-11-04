import { useState, useEffect } from "react"
import axios from 'axios'

export default function Drinks () {

  const [drinks, setDrinks] = useState(null)

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')

  setDrinks(response.data.drinks)

  }

  getData()

}, [])


if(!drinks) {
  return <h2>Loading Drinks</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1>Drinks!</h1>
    </div>
    <div className='grid'>
      {
      drinks.map((drink)=>(
      <div key={drink.strDrink}
      className='card'>
      <img className="preview" src={`${drink.strDrinkThumb}/preview`}  />
      <div className="previewText">
      <h2>{drink.strDrink}</h2>
      <h3>{drink.strAlcoholic}</h3>
      <h3>{drink.strCategory}</h3>
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}


