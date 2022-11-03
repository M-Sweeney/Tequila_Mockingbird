import { useState, useEffect } from "react"
import axios from 'axios'

export default function Drinks () {

  //create state for data
  const [drinks, setDrinks] = useState({})

  //call axios function
useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('www.thecocktaildb.com/api/json/v1/1/random.php')
  // console.log(response.data.drinks)
  // set state of our data
  setDrinks(response.data.drinks)
console.log(response)
  }

  getData()

}, [])

  //see the data
// console.log(drinks)


  // make a guard operator 
if(!drinks) {
  return <h2>Loading Drinks</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1>Featured Drink!</h1>
    </div>
    <div className='drinkDetails'>
      {
      <div key={drink.strDrink}
      className='card'>
      <img className="preview" src={`${drink.strDrinkThumb}`}  />
      <div className="previewText">
      <h2>{drink.strDrink}</h2>
      <h3>{drink.strAlcoholic}</h3>
      <h3>{drink.strCategory}</h3>
      </div>
      </div>
      }
    </div>
    </div>
  )
}}


