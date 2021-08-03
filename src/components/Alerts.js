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
        'https://treasure-backend.herokuapp.com/alerts',
        {
          currency: coinData
            .find((coin) => coin.id === alertsData.cryptocurrency)
            .symbol.toUpperCase(),
          price: alertsData.trigger_value,
          direction: 'above',
          user_id: 1,
          coin_id: alertsData.cryptocurrency,
        }
      );

      console.log(result);

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
    <div className="z-depth-2" id="alerts">
      <h5>YOUR ALERTS:</h5>

      <div className="row">
        <div className="col s6">
          <h5>Add an alert:</h5>
          <form onSubmit={submit} className="col s12">
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
            <button className="btn-floating btn-small waves-effect waves-light red">
              <i class="material-icons">add</i>
            </button>
          </form>
        </div>

        <div className="col s6">
          {userData && userData.alerts.length !== 0 && (
            <h5>Your active alerts:</h5>
          )}

          <table class="centered" id="rows-alerts">
            <thead>
              <tr>
                <th>Coin</th>
                <th>Trigger Value</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {userData &&
                userData.alerts.map((alert) => {
                  return (
                    <>
                      <tr key={alert.coin_id}>
                        <td>
                          {alert.coin_id.charAt(0).toUpperCase() +
                            alert.coin_id.slice(1)}
                        </td>
                        <td>{alert.trigger_value.toLocaleString()}$</td>
                        <td>
                          <a className="material-icons tiny delete">
                            delete_forever
                          </a>
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

export default Alerts;
