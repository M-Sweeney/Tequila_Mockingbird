import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import { useState, useEffect } from 'react'

function App() {

  const [search, setSearch] = useState(null)

  return (
    <div>
      <div className='header'>
        <Header search={search} setSearch={setSearch}/>
      </div>
      <div className='main'>
        <Main search={search} setSearch={setSearch}/>
      </div>
    </div>
  );
}

export default App;
