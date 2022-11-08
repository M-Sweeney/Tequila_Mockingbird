import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Nav ({search, setSearch}) {

  return(
    <div className='nav'>
      <Link to ='/'>Home</Link>
      <Link to ='/category' >Browse By Category</Link>
      <Link to ='/ingredients'>Browse By Ingredients</Link>
      <Link to ='/mocktails'>Mocktails</Link>
      <SearchBar search={search} setSearch={setSearch}/>
    </div>
  )
}