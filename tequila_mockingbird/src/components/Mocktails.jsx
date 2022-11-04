import { useState, useEffect } from "react"
import axios from 'axios'

export default function Mocktails () {

  //create state for data
  const [mocktails, setMocktails] = useState(null)

  //call axios function
useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
  // console.log(response.data.Mocktails)
  // set state of our data
  setMocktails(response.data.drinks)

  }

  getData()

}, [])

  //see the data
// console.log(Mocktails)


  // make a guard operator 
if(!mocktails) {
  return <h2>Loading Mocktails</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1>Mocktails!</h1>
    </div>
    <div className='grid'>
      {
      mocktails.map((drink)=>(
      <div key={drink.strDrink}
      className='card'>
      <img className="preview" src={`${drink.strDrinkThumb}/preview`}  />
      <div className="previewText">
      <h2>{drink.strDrink}</h2>
      <h4>Non Alcoholic</h4>
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}


