
// use params
//api call for base url and autofill the remainder with the drink clicked on the previous page
//pull in the drink clicked from categories and render data

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export default function Categories () {

  let { id } = useParams()

  let navigate = useNavigate()

  const showDrink = (drink) => {

    navigate(`/drinks/${drink.strDrink}`)
  }

  const [drink, setdrink] = useState(null)

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${id}`)
  // console.log(response.data.drinks)
  setdrink(response.data.drinks)

  }

  getData()

}, [])


if(!drink) {
  return <h2>Loading drink...</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1>{id}</h1>
    </div>
    <div className='grid'>
      {
      drink.map((drink)=>(
      <div onClick={() => showDrink(drink)} key={drink.strDrink}
      className='card'>
      <img className="preview" src={`${drink.strDrinkThumb}/preview`}  />
      <div className="previewText">
      <h2>{drink.strDrink}</h2>
      <h3>{drink.strAlcoholic}</h3>
      <h3>{drink.strdrink}</h3>
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}


