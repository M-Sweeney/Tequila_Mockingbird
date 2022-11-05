import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Drinks from './Drinks'
import Ingredients from './Ingredients'
import Mocktails from './Mocktails'
import Category from "./Category"
import Categories from "./Categories"
import Ingredient from "./Ingredient"

export default function Main () {
  return(
    <div>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/category" element={<Categories/>}/>
        <Route path ="/category/:id" element={<Category/>}/>
        <Route path ="/ingredients" element={<Ingredients/>}/>
        <Route path ="/ingredients/:id" element={<Ingredient/>}/>
        <Route path ="/mocktails" element={<Mocktails/>}/>
        <Route path ="/drinks" element={<Drinks/>}/>
      </Routes>
    </div>
  )
}