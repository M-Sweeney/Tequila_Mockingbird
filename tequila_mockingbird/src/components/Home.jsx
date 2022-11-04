import { useState, useEffect } from "react"
import axios from 'axios'

export default function Drinks () {

  //create state for data
  const [drinks, setDrinks] = useState(null)

  //call axios function
useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  // console.log(response.data.drinks)
  // set state of our data
  setDrinks(response.data.drinks)
  }

  getData()

}, [])

  //see the data
// console.log(drinks)


  // make a guard operator 
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
      <img className="detailsImg" src={`${drinks[0].strDrinkThumb}`}  />
      <div className="detailText">
      <h2 className="cardTitle">
        {drinks[0].strDrink}</h2>
      <h3>{drinks[0].strAlcoholic}</h3>
      <h3>{drinks[0].strCategory}</h3>
      <h3>{drinks[0].strGlass}</h3>
      <h3>{drinks[0].strIngredient1} {drinks[0].strMeasure1}</h3>
      <h3>{drinks[0].strInstructions}</h3>
      </div>
      </div>
      }
    </div>
    </div>
  )
}}


