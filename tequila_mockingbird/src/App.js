import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  return (
    <div>
      <h1>Hello world</h1>
      <div className='header'>
        <Header />
      </div>
      <div className='main'>
        <Main/>
      </div>
    </div>
  );
}

export default App;
