import Nav from "./Nav"
import Banner from '../assets/Banner.jpg'


export default function Header ({search, setSearch}) {


  return(
    <div>
      <img src={Banner} className="banner"/>
      <h1 className="headerTitle">Tequila Mockingbird</h1>
      <Nav search={search} setSearch={setSearch}/>
    </div>
  )
}