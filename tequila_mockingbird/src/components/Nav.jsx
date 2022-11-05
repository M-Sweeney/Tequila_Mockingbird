import { Link } from 'react-router-dom'

export default function Nav (props) {
  return(
    <div className='nav'>
      <Link to ='/'>Home</Link>
      <Link to ='/category' >Browse By Category</Link>
      <Link to ='/ingredients'>Browse By Ingredients</Link>
      <Link to ='/mocktails'>Mocktails</Link>
      {/* <Link to ='/'>Search</Link> */}
    </div>
  )
}