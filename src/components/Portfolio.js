import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import M from 'materialize-css';
import '../styles/Portfolio.css';
import Graph from '../components/Chart';
import colors from '../utils/Colors';

console.log(colors);

const Portfolio = ({ coinData, onRefreshUserData, userData }) => {
  const selectRef = useRef();

  // console.log(userData);
  // console.log('coinData', coinData);

  const [portfolioData, setPortfolioData] = useState({
    cryptocurrency: 'bitcoin',
    quantity: '',
    value: ''
  });

  useEffect(() => {
    if (selectRef.current) {
      M.FormSelect.init(selectRef.current);
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const searchedCoin = coinData.find((coin) => coin.id === portfolioData.cryptocurrency);
      // setPortfolioData({ ...portfolioData, value: portfolioData.quantity * searchedCoin.current_price });
      const result = await axios.post(
        'https://treasure-backend.herokuapp.com/coins',
        {
          user_id: 1,
          coin_id: portfolioData.cryptocurrency,
          quantity: portfolioData.quantity,
          coin_value: searchedCoin.current_price,
          value: portfolioData.quantity * searchedCoin.current_price
        }
      );

      if (true) {
        onRefreshUserData();
      }
      e.target.reset();
      setPortfolioData({
        cryptocurrency: 'bitcoin',
        quantity: '',
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const deleteCoin = async (coin_id) => {
    try {
      await axios.delete(
        `https://treasure-backend.herokuapp.com/coins/${coin_id}/1`
      );

      if (true) {
        onRefreshUserData();
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  function handleChange(e) {
    setPortfolioData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function coinInPortfolio(coinInDatabase) {
    let nameOfCoin = coinData.find((coin) => coin.id === coinInDatabase);
    return nameOfCoin.current_price
  }

    // console.log(coinInPortfolio('bitcoin'));

  return (
    <div className="z-depth-2" id="portfolio">
      <h5>YOUR PORTFOLIO:</h5>

      <div className="row">
        <div className="col s6">

          <div className="chart">
              {!userData ? (
                <div class="progress">
                  <div class="indeterminate"></div>
                </div>
              ) : (
                <Graph userData={userData}/>
              )}
          </div>

          <form onSubmit={submit}>
            <h5>Add a coin for your Portfolio:</h5>
            <div className="row">
              <div class="input-field col s12">
                <select
                  className="browser-default"
                  ref={selectRef}
                  onChange={handleChange}
                  name="cryptocurrency"
                >
                  <option value="" disabled selected>
                    Choose coin
                  </option>
                  {coinData &&
                    coinData.map((coin) => {
                      return (
                        <option key={coin.id} value={coin.id}>
                          {coin.id}
                        </option>
                      );
                    })}
                </select>
                
              </div>
            </div>

            <div className="row">
              <div className="col s6">
                <input
                  onChange={handleChange}
                  value={portfolioData.quantity}
                  name="quantity"
                  type="number"
                  min={0}
                  step={0.0000000001}
                  required
                  className="validate"
                />
                <label for="quantity">Quantity</label>
              </div>
            </div>
            <button
              type="sumbit"
              className="btn-floating btn-small waves-effect waves-light red"
            >
              <i className="material-icons">add</i>
            </button>
          </form>
        </div>

        <div className="col s6">
          <h5>Your Portfolio:</h5>

         

          <table class="centered" id="rows-alerts">
            <thead>
              <tr>
                <th>Coin</th>
                <th>Quantity</th>
                <th>Value</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {userData && coinData &&
                userData.coins
                  .sort((a, b) => b.value - a.value)
                  .map((coin, index) => {
                    return (
                      <>
                        <tr key={index} style={{ color: colors[index].color}}>
                          <td>
                            {coin.coin_id.charAt(0).toUpperCase() +
                              coin.coin_id.slice(1)}
                          </td>
                          <td>{coin.quantity.toLocaleString()}</td>
                          <td>${(coin.quantity * coinInPortfolio(coin.coin_id)).toLocaleString()}{}</td>
                          <td>
                            <span
                              style={{ cursor: 'pointer' }}
                              className="material-icons tiny delete"
                              onClick={() => deleteCoin(coin.coin_id)}
                            >
                              delete_forever
                            </span>
                          </td>
                        </tr>
                      </>
                    );
                  }
                  )
              }
                    <tr>
                        <th style={{ textAlign: "center" }} colspan="2">TOTAL</th>
                        <td>${userData && userData.coins.reduce((acc, val) => acc + val.value , 0).toLocaleString()}</td>
                    </tr>
                   
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
