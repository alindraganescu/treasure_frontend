import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { react } from '@babel/types';
import axios from 'axios';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Alerts from './components/Alerts';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import Portfolio from './components/Portfolio';
import Wiki from './components/Wiki';
import Coin from './components/Coin';
import ShortCoins from './components/ShortCoins';
import BigNews from './components/BigNews';
import Register from './components/Register';

function App() {
  const [coinData, setCoinData] = useState();
  const [newsData, setNewsData] = useState();
  const [newsPage, setNewsPage] = useState(0);
  const [isLoading, setIsLoading] = useState();
  const [credentials, setCredentials] = useState();

  // const handleSetCredentials = (e) => {}

  //`https://treasure-backend.herokuapp.com/home?newsPage=${newsPage}`
  // `http://localhost:3000/home?newsPage=${newsPage}`

  useEffect(() => {
    // setIsLoading(true);
    axios
      .get(`https://treasure-backend.herokuapp.com/home?newsPage=${newsPage}`)
      .then((res) => {
        const { coinGeckoData, newsData } = res.data;
        console.log({ coinGeckoData });
        // console.log({ newsData });
        setCoinData(coinGeckoData);
        setNewsData(newsData);
      })
      .catch((error) => console.log(error));
  }, [newsPage]);

  return (
    <div className="">
      <div className="row">
        <div
          className="col s12 navbar-fixed z-depth-2"
          style={{ padding: '0' }}
        >
          <Header />
        </div>

        <div
          className="col s12 m8 l9"
          style={{ backgroundColor: '#065471', color: '#FFC045' }}
        >
          <Switch>
            <Route path="/home/:coin">
              {!coinData ? (
                <span>Loading...</span>
              ) : (
                <Coin coinData={coinData.data} />
              )}
            </Route>
            <Route path="/home">
              {!coinData ? (
                <span>Loading...</span>
              ) : (
                <Home coinData={coinData.data} />
              )}
            </Route>
            <Route path="/news">
              {!newsData ? (
                <span>Loading...</span>
              ) : (
                <BigNews
                  newsData={newsData}
                  setNewsPage={setNewsPage}
                  newsPage={newsPage}
                />
              )}
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/alerts">
              <Alerts />
            </Route>
            <Route path="/wiki">
              <Wiki />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </div>

        <div
          className="col s12 m4 l3"
          style={{
            backgroundColor: '#FFC045',
            color: '#065471',
            fontSize: '0.6rem',
          }}
        >
          <Switch>
            <Route path="/home">
              {!newsData ? (
                <span>Loading...</span>
              ) : (
                <News newsData={newsData.results} />
              )}
            </Route>
            <Route path="/*">
              {!coinData ? (
                <span>Loading...</span>
              ) : (
                <ShortCoins coinData={coinData.data} />
              )}
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
