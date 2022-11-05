
// use params
//api call for base url and autofill the remainder with the drink clicked on the previous page
//pull in the drink clicked from categories and render data

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

export default function Ingredient () {

  let { id } = useParams()

  const [drink, setdrink] = useState(null)

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${id}`)
  // console.log(response.data.ingredients)
  setdrink(response.data.ingredients)

  }

  getData()

}, [])


if(!drink) {
  return <h2>Loading Ingredient...</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1>{id}</h1>
    </div>
    <div className='grid'>
      {
      <div key={drink.strIngredient}
      className='detailText'>
      <div className="previewText">
      <h3>{drink[0].strDescription}</h3>
      <h3>{drink[0].strABV}</h3>
      </div>
      </div>
      }
    </div>
    </div>
  )
}}


