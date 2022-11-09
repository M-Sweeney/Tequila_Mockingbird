import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

export default function Ingredient () {

  let { id } = useParams()

  const [drink, setdrink] = useState(null)

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${id}`)
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
    <div className="padding">
      <div className="detailsCard">
      <div key={drink.strIngredient}
      className='ingredientText'>
      <h3>{drink[0].strDescription}</h3>
      </div>
    </div>
    </div>
    </div>
  )
}}


