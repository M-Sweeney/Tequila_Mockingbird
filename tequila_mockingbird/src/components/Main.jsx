import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Drinks from './Drinks'
import DrinkDetails from './DrinkDetails'
import Ingredients from './Ingredients'
import IngredientDetails from "./IngredientDetails"
import Mocktails from './Mocktails'
import MocktailDetails from './MocktailDetails'
import Categories from "./Categories"
import Category from "./Category"

export default function Main () {
  return(
    <div>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/drinks" element={<Drinks/>}/>
        <Route path ="/drinks/:id" element={<DrinkDetails/>}/>
        <Route path ="/ingredients" element={<Ingredients/>}/>
        <Route path ="/ingredients/:id" element={<IngredientDetails/>}/>
        <Route path ="/mocktails/" element={<Mocktails/>}/>
        <Route path ="/mocktails/:id" element={<MocktailDetails/>}/>
        <Route path ="/category" element={<Categories/>}/>
        <Route path ="/category/:id" element={<Category/>}/>
      </Routes>
    </div>
  )
}