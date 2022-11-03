import Nav from "./Nav"


export default function Header (props) {
  return(
    <div>
      <h2>Tequila Mockingbird</h2>
      <Nav drinks={props.drinks}/>
    </div>
  )
}