import Nav from "./Nav"
import Banner from '../assets/banner.jpg'
import Banner2 from '../assets/banner2.jpg'





export default function Header ({search, setSearch}) {


  return(
    <div>
      <img src={Banner2} className="banner"/>
      <Nav search={search} setSearch={setSearch}/>
    </div>
  )
}