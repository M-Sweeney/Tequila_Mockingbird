import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
    //create state for data
    const [drinks, setDrinks] = useState([])
    const [selectedDrink, setSelectedDrink] = useState(null)
  
    //call axios function
  useEffect(()=>{
    const getData = async () =>{
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    console.log(response.data.drinks)
    // set state of our data
    setDrinks(response.data.drinks)
  
    }
  
    getData()

  }, [])




  return (
    <div>
      <h1>Hello world</h1>
      <div className='header'>
        <Header drinks={drinks}/>
      </div>
      <div className='main'>
        <Main/>
      </div>
    </div>
  );
}

export default App;
