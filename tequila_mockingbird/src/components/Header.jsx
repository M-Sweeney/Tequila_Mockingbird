import Nav from "./Nav"
import Banner from '../assets/banner.jpg'





export default function Header ({search, setSearch}) {


  return(
    <div>
      <img src={Banner} className="banner"/>
      <Nav search={search} setSearch={setSearch}/>
    </div>
  )
}