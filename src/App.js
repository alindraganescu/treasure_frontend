import logo from './logo.svg';
import './styles/App.css';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Alerts from './components/Alerts';
import Footer from './components/Footer';
import Header from './components/Header';
import SmallNews from './components/SmallNews';
import Portfolio from './components/Portfolio';
import Wiki from './components/Wiki';
import Coin from './components/Coin';
import ShortCoins from './components/ShortCoins';
import BigNews from './components/BigNews';
import Register from './components/Register';
import { login } from './utils/Auth';

function App() {
  const [coinData, setCoinData] = useState();
  const [newsData, setNewsData] = useState();
  const [newsPage, setNewsPage] = useState(0);
  const [isLoading, setIsLoading] = useState();
  const [userData, setUserData] = useState();
  const [credentials, setCredentials] = useState();
  // const [backgroundColor, setBackgroundColor] = useState('#FFC045');

  const { pathname } = useLocation();

  // useEffect(() => {
  //   if (pathname === '/home' || pathname === '/news') {
  //     setBackgroundColor('#FFC045');
  //   } else {
  //     setBackgroundColor('#065471');
  //   }
  // }, [pathname]);

  const handleSetCredentials = (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAuthentication = () => {
    console.log({ credentials });
  };

  //`https://treasure-backend.herokuapp.com/home?newsPage=${newsPage}`
  // `http://localhost:3001/home?newsPage=${newsPage}`
  // `https://treasure-backend.herokuapp.com/receive-alert`

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

  const fetchData = useCallback(async (query) => {
    const res = await axios.get(
      `https://treasure-backend.herokuapp.com${query}`
    );
    return res;
  }, []);

  const getUserData = async () => {
    const { data } = await fetchData('/alldata/1');
    setUserData(data);
  };

  useEffect(() => {
    const getUserData = async () => {
      const { data } = await fetchData('/alldata/1');
      setUserData(data);
    };
    getUserData();
  }, []);

  return (
    <div
      className="main-container"
      // style={{ backgroundColor: backgroundColor }}
    >
      <div className="col s12 navbar-fixed z-depth-2" style={{ padding: '0' }}>
        <Header />
      </div>

      <div className="row">
        <div
          className="col s12 m8 l8 left-container"
          // style={{ backgroundColor: '#065471', color: '#FFC045' }}
        >
          <Switch>
            <Route path="/home/:coin">
              {!coinData ? (
                <div class="progress">
                  <div class="indeterminate"></div>
                </div>
              ) : (
                <Coin coinData={coinData.data} />
              )}
            </Route>
            <Route path="/home">
              {!coinData ? (
                <div class="progress">
                  <div class="indeterminate"></div>
                </div>
              ) : (
                <Home coinData={coinData.data} />
              )}
            </Route>
            <Route path="/news">
              {!newsData ? (
                <div class="progress">
                  <div class="indeterminate"></div>
                </div>
              ) : (
                <BigNews
                  newsData={newsData}
                  setNewsPage={setNewsPage}
                  newsPage={newsPage}
                />
              )}
            </Route>
            <Route path="/portfolio">
              {!coinData ? (
                <div class="progress">
                  <div class="indeterminate"></div>
                </div>
              ) : (
                <Portfolio
                  coinData={coinData.data}
                  userData={userData}
                  onRefreshUserData={getUserData}
                />
              )}
            </Route>
            <Route path="/register">
              <Register
                onSetCredentials={handleSetCredentials}
                onAuth={handleAuthentication}
              />
            </Route>
            <Route path="/alerts">
              {!coinData ? (
                <div class="progress">
                  <div class="indeterminate"></div>
                </div>
              ) : (
                <Alerts
                  coinData={coinData.data}
                  userData={userData}
                  onRefreshUserData={getUserData}
                />
              )}
            </Route>
            <Route path="/wiki">
              {!userData ? (
                <div class="progress">
                  <div class="indeterminate"></div>
                </div>
              ) : (
                <Wiki userData={userData} onRefreshUserData={getUserData} />
              )}
            </Route>
            <Redirect to="/home" />
          </Switch>
        </div>

        <div
          className="col s12 m4 l4 right-container "
          style={{
            backgroundColor: '#065471',
            color: '#FFC045',
            fontSize: '0.8rem',
          }}
        >
          <Switch>
            <Route path="/home/:coin">
              {!coinData ? (
                <div class="progress">
                  <div class="indeterminate"></div>
                </div>
              ) : (
                <ShortCoins coinData={coinData.data} />
              )}
            </Route>
            <Route path="/home">
              {!newsData ? (
                <div class="progress">
                  <div class="indeterminate"></div>
                </div>
              ) : (
                <SmallNews newsData={newsData.results} />
              )}
            </Route>
            <Route path="/*">
              {!coinData ? (
                <div class="progress">
                  <div class="indeterminate"></div>
                </div>
              ) : (
                <ShortCoins coinData={coinData.data} />
              )}
            </Route>
          </Switch>
        </div>

        <div className="col s12 z-depth-2" style={{ padding: '0' }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
