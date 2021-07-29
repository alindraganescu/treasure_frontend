import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import M from 'materialize-css';

const Portfolio = ({ coinData, onRefreshUserData, userData }) => {
  const selectRef = useRef();

  console.log(userData);

  const [portfolioData, setPortfolioData] = useState({
    cryptocurrency: '',
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
        cryptocurrency: '',
        quantity: '',
      });
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

  return (
    <>
      <h3>Portfolio Page</h3>
      <div className="row">
        <div className="col s12">
          {userData &&
            userData.coins.map((coin) => {
              return (
                <div key={coin.coin_id}>
                  <span>{coin.coin_id}</span>:<span>{coin.quantity}</span>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row">
        <form onSubmit={submit} className="col s12">
          <div className="row">
            <div class="input-field col s12">
              <select
                ref={selectRef}
                onChange={handleChange}
                name="cryptocurrency"
              >
                <option value="" disabled selected>
                  Choose your option
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
              <label>Materialize Select</label>
            </div>
          </div>
          <div className="row">
            <div className=" col s6">
              <input
                onChange={handleChange}
                value={portfolioData.quantity}
                name="quantity"
                type="number"
                min={0}
                step={0.1}
                required
                className="validate"
              />
              <label for="quantity">Quantity</label>
            </div>
          </div>
          <button
            type="sumbit"
            className="btn-floating btn-large waves-effect waves-light red"
          >
            <i className="material-icons">add</i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Portfolio;
