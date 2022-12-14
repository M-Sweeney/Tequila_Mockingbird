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
  setdrink(response.data.drinks)

  }

  getData()

}, [])


if(!drink) {
  return <h2>Loading category...</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1>{id}s</h1>
    </div>
    <div className='grid'>
      {
      drink.map((drink)=>(
      <div onClick={() => showDrink(drink)} key={drink.strDrink}
      className='card'>
      <img className="preview" src={`${drink.strDrinkThumb}/preview`}  />
      <div className="previewText">
      <h2>{drink.strDrink}</h2>
      <h2>{drink.strAlcoholic}</h2>
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}


