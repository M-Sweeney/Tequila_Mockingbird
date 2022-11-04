import { useState, useEffect } from "react"
import axios from 'axios'

export default function Ingredients () {

  const [ingredients, setIngredients] = useState(null)

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')

  setIngredients(response.data.drinks)

  }

  getData()

}, [])


if(!ingredients) {
  return <h2>Loading Ingredients</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1>Ingredients!</h1>
    </div>
    <div className='grid'>
      {
      ingredients.map((drink)=>(
      <div key={drink.strIngredient1}
      className='card'>
      <div className="previewText">
      <h2>{drink.strIngredient1}</h2>
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}


