import { useState, useEffect } from "react"
import axios from 'axios'

export default function Drinks () {


  const [drinks, setDrinks] = useState(null)

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')

  setDrinks(response.data.drinks[0])
  }

  getData()

}, [])


if(!drinks) {
  return <h2>Loading Featured Drink</h2>
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
      <img className="detailsImg" src={`${drinks.strDrinkThumb}`}  />
      <div className="detailText">
      <h1 className="cardTitle">
        {drinks.strDrink}</h1>
      <h3>{drinks.strAlcoholic}</h3>
      <h3>{drinks.strCategory}</h3>
      <h3>{drinks.strGlass}</h3>
      <ul>
      <h3>Ingredients:</h3>
      <h3>{drinks.strIngredient1} {drinks.strMeasure1}</h3>
      <h3>{drinks.strIngredient2} {drinks.strMeasure2}</h3>
      <h3>{drinks.strIngredient3} {drinks.strMeasure3}</h3>
      <h3>{drinks.strIngredient4} {drinks.strMeasure4}</h3>
      <h3>{drinks.strIngredient5} {drinks.strMeasure5}</h3>
      <h3>{drinks.strIngredient6} {drinks.strMeasure6}</h3>
      <h3>{drinks.strIngredient7} {drinks.strMeasure7}</h3>
      <h3>{drinks.strIngredient8} {drinks.strMeasure8}</h3>
      <h3>{drinks.strIngredient9} {drinks.strMeasure9}</h3>
      <h3>{drinks.strIngredient10} {drinks.strMeasure10}</h3>
      <h3>{drinks.strIngredient11} {drinks.strMeasure11}</h3>
      <h3>{drinks.strIngredient12} {drinks.strMeasure12}</h3>
      <h3>{drinks.strIngredient13} {drinks.strMeasure13}</h3>
      <h3>{drinks.strIngredient14} {drinks.strMeasure14}</h3>
      <h3>{drinks.strIngredient15} {drinks.strMeasure15}</h3>
      </ul>
      <h3>{drinks.strInstructions}</h3>
      </div>
      </div>
      }
    </div>
    </div>
  )
}}


