import Nav from "./Nav"
import Banner from '../assets/Banner.jpg'
import Banner2 from '../assets/banner2.png'
import Banner3 from '../assets/banner3.jpg'



export default function Header ({search, setSearch}) {


  return(
    <div>
      <img src={Banner3} className="banner"/>
      <Nav search={search} setSearch={setSearch}/>
    </div>
  )
}