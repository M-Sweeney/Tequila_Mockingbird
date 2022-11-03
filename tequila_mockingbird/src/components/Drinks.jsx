import { useState, useEffect } from "react"
import axios from 'axios'

export default function Drinks () {

  //create state for data
  const [drinks, setDrinks] = useState({})

  //call axios function
useEffect(()=>{
  const getData = async () =>{
  const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  console.log(response.data)
  // set state of our data
  setDrinks(response.data)

  }

  getData()

}, [])

  //see the data
console.log(drinks)

  //make a guard operator 

if(!drinks) {
  return <h2>Loading Drinks</h2>
}else{
  return(
    <div>
      <h2>drinks: </h2>
    </div>
  )}
}