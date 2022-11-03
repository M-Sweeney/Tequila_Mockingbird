import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Drinks from './Drinks'
import Ingredients from './Ingredients'
import Mocktails from './Mocktails'

export default function Main () {
  return(
    <div>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/drinks" element={<Drinks/>}/>
        <Route path ="/ingredients" element={<Ingredients/>}/>
        <Route path ="/mocktails" element={<Mocktails/>}/>
      </Routes>
    </div>
  )
}