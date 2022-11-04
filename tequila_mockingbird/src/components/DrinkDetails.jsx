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
      <h1>Featured Drink!</h1>
    </div>

    <div className='drinkDetails'>
      {
      <div key={drinks.strDrink}
      className='detailsCard'>
      <img className="detailsImg" src={`${drinks[0].strDrinkThumb}`}  />
      <div className="detailText">
      <h2 className="cardTitle">
        {drinks[0].strDrink}</h2>
      <h3>{drinks[0].strAlcoholic}</h3>
      <h3>{drinks[0].strCategory}</h3>
      <h3>{drinks[0].strGlass}</h3>
      <ul>
      <h3>{drinks[0].strIngredient1} {drinks[0].strMeasure1}</h3>
      <h3>{drinks[0].strIngredient2} {drinks[0].strMeasure2}</h3>
      <h3>{drinks[0].strIngredient3} {drinks[0].strMeasure3}</h3>
      <h3>{drinks[0].strIngredient4} {drinks[0].strMeasure4}</h3>
      <h3>{drinks[0].strIngredient5} {drinks[0].strMeasure5}</h3>
      <h3>{drinks[0].strIngredient6} {drinks[0].strMeasure6}</h3>
      <h3>{drinks[0].strIngredient7} {drinks[0].strMeasure7}</h3>
      <h3>{drinks[0].strIngredient8} {drinks[0].strMeasure8}</h3>
      <h3>{drinks[0].strIngredient9} {drinks[0].strMeasure9}</h3>
      <h3>{drinks[0].strIngredient10} {drinks[0].strMeasure10}</h3>
      <h3>{drinks[0].strIngredient11} {drinks[0].strMeasure11}</h3>
      <h3>{drinks[0].strIngredient12} {drinks[0].strMeasure12}</h3>
      <h3>{drinks[0].strIngredient13} {drinks[0].strMeasure13}</h3>
      <h3>{drinks[0].strIngredient14} {drinks[0].strMeasure14}</h3>
      <h3>{drinks[0].strIngredient15} {drinks[0].strMeasure15}</h3>
      </ul>
      <h3>{drinks[0].strInstructions}</h3>
      </div>
      </div>
      }
    </div>
    </div>
  )
}}


