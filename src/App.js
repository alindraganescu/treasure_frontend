import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { react } from '@babel/types';
import axios from 'axios';

function App() {
  const [coinData, setCoinData] = useState();
  const [newsData, setNewsData] = useState();
  const [isLoading, setIsLoading] = useState();

  //https://treasure-backend.herokuapp.com/home
  // http://localhost:3000/home

  useEffect(() => {
    // setIsLoading(true);
    axios.get('https://treasure-backend.herokuapp.com/home').then((res) => {
      console.log(res.data);
      // setCoinData(res.data.coinGecko);
      // setNewsData(res.data.news);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//https://https://treasure-backend.herokuapp.com/

export default App;
