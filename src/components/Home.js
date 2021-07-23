import React from 'react';
import '../styles/Home.css';

const Home = ({ coinData }) => {
  // console.log(coinData);

  const beginning = 0;
  const end = 20;

  return (
    <div className="">
      <h2>Coins List</h2>

      <table class="striped">
        <thead>
          <tr>
            <th>Position</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Abbr.</th>
            <th>Value</th>
            <th>24h Change</th>
            <th>Market Cap</th>
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
                  <td>{coin.name}</td>
                  <td>{coin.symbol.toUpperCase()}</td>
                  <td>${coin.current_price.toLocaleString()}</td>
                  {coin.price_change_percentage_24h > 0 ? (
                    <td className="positive_price_change24">
                      +{coin.price_change_percentage_24h.toLocaleString()}%
                    </td>
                  ) : (
                    <td className="negative_price_change24">
                      {coin.price_change_percentage_24h.toLocaleString()}%
                    </td>
                  )}
                  <td>${coin.market_cap.toLocaleString()}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
