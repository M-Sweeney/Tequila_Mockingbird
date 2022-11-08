//make a form with an input
// make a handlechange to submit the input and make an api call using the input value
//make an api call to www.thecocktaildb.com/api/json/v1/1/search.php?s=_________
//map through results
//display drink cards that match 
//make it possible to click through the drink cards to show the drink details 

import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function Search({search, setSearch}) {

  let navigate = useNavigate()


  const [formState, setFormState] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    getSearch()
    navigate(`/searchresults`)
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  };
  
  const getSearch = async () => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${formState[""]}`
    );
    setSearch(response.data.drinks)
  };


  return (
    <div className="Search">
      <form id="input" >
        <input
          type="text"
          placeholder="Search by drink name"
          onChange={handleChange}
        />
        <button
            type="button"
            onClick={handleSubmit}
            id="searchButton"
          >Search
        </button>
      </form>
    </div>
  );
}

export default Search


