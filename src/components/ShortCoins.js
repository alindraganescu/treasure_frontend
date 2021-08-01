import React from 'react';
import '../styles/ShortCoins.css';
import { NavLink } from 'react-router-dom';

const ShortCoins = ({ coinData }) => {
  console.log(coinData);

  const beginning = 0;
  const end = 20;

  return (
    <div className="z-depth-2 short-coins">
      <h5>Prices by Market Cap:</h5>
      <table className="striped centered" id="rows-data">
        <thead>
          <tr>
            <th>Position</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Value</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {coinData.slice(beginning, end).map((coin, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="logoCoin"
                    />
                  </td>
                  <td className="small-shadow">
                    <NavLink to={`/home/${coin.id}`}>{coin.name}</NavLink>
                  </td>
                  <td> ${coin.current_price.toLocaleString()} </td>
                  {coin.price_change_percentage_24h > 0 ? (
                    <td className="positive_price_change24">
                      +{coin.price_change_percentage_24h.toLocaleString()}%
                    </td>
                  ) : (
                    <td className="negative_price_change24">
                      {coin.price_change_percentage_24h.toLocaleString()}%
                    </td>
                  )}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShortCoins;
