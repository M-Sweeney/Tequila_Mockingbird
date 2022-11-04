import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Categories () {

  let navigate = useNavigate()

  const showDrink = (drink) => {

    console.log(drink)
    console.log(drink.strCategory)

    navigate(`${drink.strCategory}`)
  }

  const [category, setCategory] = useState(null)

useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
  
  setCategory(response.data.drinks)

  }

  getData()

}, [])


if(!category) {
  return <h2>Loading Categories...</h2>
}else{
  return(
    <div className='container'>
    <div className="title">
      <h1>Categories!</h1>
    </div>
    <div className='grid'>
      {
      category.map((drink)=>(
      <div onClick={() => showDrink(drink)} key={drink.strCategory}
      className='card'>
      <div className="previewText">
      <h2>{drink.strCategory}</h2>
      </div>
      </div>
      ))}
    </div>
    </div>
  )
}}


