import { useState, useEffect } from "react"
import axios from 'axios'

export default function Category () {

  //create state for data
  const [category, setCategory] = useState(null)

  //call axios function
useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
  // console.log(response.data.Category)
  // set state of our data
  setCategory(response.data.drinks)

  }

  getData()

}, [])

  //see the data
// console.log(Category)


  // make a guard operator 
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
      <div key={drink.strCategory}
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


