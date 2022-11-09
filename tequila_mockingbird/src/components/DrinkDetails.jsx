import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

export default function Drink () {

  let { id } = useParams()

  const [drink, setdrink] = useState(null)

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get(`https:www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`)
  setdrink(response.data.drinks[0])

  }

  getData()

}, [])


if(!drink) {
  return <h2>Loading Drink...</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1>{drink.strDrink}</h1>
    </div>
    <div className="padding">
    <div className='drinkDetails'>
      <div key={drink.strDrink}
      className='detailsCard'>
      <img className="detailsImg" src={`${drink.strDrinkThumb}`}  />
      <div className="detailText">
      <h3>{drink.strAlcoholic}</h3>
      <h3>Glass Type: {drink.strGlass}</h3>
      <h2 className="heading">Ingredient List</h2>
      <h3>{drink.strIngredient1} {drink.strMeasure1}</h3>
      <h3>{drink.strIngredient2} {drink.strMeasure2}</h3>
      <h3>{drink.strIngredient3} {drink.strMeasure3}</h3>
      <h3>{drink.strIngredient4} {drink.strMeasure4}</h3>
      <h3>{drink.strIngredient5} {drink.strMeasure5}</h3>
      <h3>{drink.strIngredient6} {drink.strMeasure6}</h3>
      <h3>{drink.strIngredient7} {drink.strMeasure7}</h3>
      <h3>{drink.strIngredient8} {drink.strMeasure8}</h3>
      <h3>{drink.strIngredient9} {drink.strMeasure9}</h3>
      <h3>{drink.strIngredient10} {drink.strMeasure10}</h3>
      <h3>{drink.strIngredient11} {drink.strMeasure11}</h3>
      <h3>{drink.strIngredient12} {drink.strMeasure12}</h3>
      <h3>{drink.strIngredient13} {drink.strMeasure13}</h3>
      <h3>{drink.strIngredient14} {drink.strMeasure14}</h3>
      <h3>{drink.strIngredient15} {drink.strMeasure15}</h3>
      <h3 className="heading">Instructions</h3>
      <h3>{drink.strInstructions}</h3>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}}


