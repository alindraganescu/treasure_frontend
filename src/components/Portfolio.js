import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import M from 'materialize-css';
import '../styles/Portfolio.css';
import { PieChart } from 'react-minimal-pie-chart';

const Portfolio = ({ coinData, onRefreshUserData, userData }) => {
  const selectRef = useRef();

  console.log(userData);

  const [portfolioData, setPortfolioData] = useState({
    cryptocurrency: 'bitcoin',
    quantity: '',
  });

  useEffect(() => {
    if (selectRef.current) {
      M.FormSelect.init(selectRef.current);
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        'https://treasure-backend.herokuapp.com/coins',
        {
          user_id: 1,
          coin_id: portfolioData.cryptocurrency,
          quantity: portfolioData.quantity,
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
                {/* <label>Materialize Select</label> */}
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

          <PieChart
              data={[
                { title: 'Bitcoin', value: 10, color: '#E38627' },
                { title: 'Ether', value: 15, color: '#C13C37' },
                { title: 'Polkadot', value: 35, color: '#6A2135' },
              ]}

              label={(labelRenderProps: LabelRenderProps) =>
                number | string | React.ReactElement | undefined | null
  }



              // label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
              // label={({ dataEntry }) => dataEntry.value}
            />

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
                  .sort((a, b) => b.coin_id - a.coin_id) //cannot sort by value?
                  .map((coin) => {
                    return (
                      <>
                        <tr key={coin.coin_id}>
                          <td>
                            {coin.coin_id.charAt(0).toUpperCase() +
                              coin.coin_id.slice(1)}
                          </td>
                          <td>{coin.quantity.toLocaleString()}</td>
                          <td>${(coin.quantity * coinInPortfolio(coin.coin_id)).toLocaleString()}</td>
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
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
