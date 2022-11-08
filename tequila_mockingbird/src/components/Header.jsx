import Nav from "./Nav"
import Banner from '../assets/Banner.jpg'
import Banner2 from '../assets/banner2.png'



export default function Header ({search, setSearch}) {


  return(
    <div>
      <img src={Banner2} className="banner"/>
      <h1 className="headerTitle">Tequila Mockingbird</h1>
      <Nav search={search} setSearch={setSearch}/>
    </div>
  )
}