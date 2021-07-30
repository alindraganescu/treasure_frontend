import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import M from 'materialize-css';
import '../styles/Alerts.css';

const Alerts = ({ coinData, onRefreshUserData, userData }) => {
  const selectRef = useRef();

  console.log(userData);
  // console.log(coinData);

  const [alertsData, setAlertsData] = useState({
    cryptocurrency: '',
    trigger_value: '',
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
        'https://treasure-backend.herokuapp.com/receive-alert',
        {
          user_id: 1,
          coin_id: alertsData.cryptocurrency,
          trigger_value: alertsData.trigger_value,
        }
      );

      if (true) {
        onRefreshUserData();
      }
      e.target.reset();
      setAlertsData({
        cryptocurrency: '',
        trigger_value: '',
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  function handleChange(e) {
    setAlertsData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <h4>Alerts Page</h4>
      {/* //Display section */}
      {userData && userData.alerts.length !== 0 && (
        <h5>Your current alerts are:</h5>
      )}
      <div className="">
        <div className="row">
          <div className="col s12">
            {userData &&
              userData.alerts.map((alert) => {
                return (
                  <div key={alert.coin_id}>
                    <span>Coin: {alert.coin_id}</span>
                    <span> - alert value {alert.trigger_value}$&emsp;</span>
                    <a className="material-icons tiny delete">delete_forever</a>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row">
          <form onSubmit={submit} className="col s12">
            <div className="row">
              <div class="input-field col s6">
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
              <div className=" col s6">
                <input
                  onChange={handleChange}
                  value={alertsData.quantity}
                  name="trigger_value"
                  type="number"
                  min={0}
                  step={0.0000000001}
                  required
                  className="validate"
                />
                <label for="quantity">Trigger Value</label>
              </div>
            </div>
            <button className="btn-floating btn-large waves-effect waves-light red">
              <i class="material-icons">add</i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Alerts;
