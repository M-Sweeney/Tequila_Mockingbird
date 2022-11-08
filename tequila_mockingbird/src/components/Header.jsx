import Nav from "./Nav"


export default function Header ({search, setSearch}) {


  return(
    <div>
      <h1>Tequila Mockingbird</h1>
      <Nav search={search} setSearch={setSearch}/>
    </div>
  )
}