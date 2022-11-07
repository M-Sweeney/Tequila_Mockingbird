//make a form with an input
// make a handlechange to submit the input and make an api call using the input value

//make an api call to www.thecocktaildb.com/api/json/v1/1/search.php?s=_________
//map through results
//display drink cards that match 
//make it possible to click through the drink cards to show the drink details 

import { useEffect, useState } from "react"
import axios from "axios"

function Search() {

  const [formState, setFormState] = useState("")
  const [search, setSearch] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  };

  const useEffect = async () => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${formState}`
    );
    console.log(response.data)
    console.log(formState)

    setSearch(response.data.drinks)
  };

  return (
    <div className="Search">
      <form id="input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by drink name"
          value={formState.subject}
          onChange={handleChange}
        />
        <button
          
            type="button"
            onClick={useEffect}
            id="searchButton"
            value="Click here"
          >Search
        </button>
      </form>
      <div className="searchResults">
        {search?.map((drinks) => (
          <div key={drinks.strDrink} className="card">
            <h3>{drinks.strDrink} </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search
