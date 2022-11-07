import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export default function Mocktails () {

  let navigate = useNavigate()

  const showDrink = (drink) => {

    navigate(`${drink.idDrink}`)
  }
  const [mocktails, setMocktails] = useState(null)
  

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')

  setMocktails(response.data.drinks)

  }

  getData()

}, [])


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
      <div onClick={() => showDrink(drink)} key={drink.strDrink}
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


