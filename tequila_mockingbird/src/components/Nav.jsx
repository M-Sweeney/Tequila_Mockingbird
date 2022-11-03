import { Link } from 'react-router-dom'

export default function Nav (props) {
  return(
    <div>
      <Link to ='/'>Home</Link>
      <Link to ='/drinks' >Browse Drinks</Link>
      <Link to ='/ingredients'>Browse Ingredients</Link>
      <Link to ='/mocktails'>Mocktails</Link>
      <Link to ='/'>Search</Link>
    </div>
  )
}