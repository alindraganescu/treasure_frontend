import React from 'react';
import { useParams } from 'react-router-dom';

const Coin = ({ coinData }) => {
  const { coin } = useParams();
  console.log(coinData);
  // console.log(coin);
  const searchedCoin = coinData.find((coinObject) => coinObject.id === coin);
  return (
    <div className="z-depth-2">
      {searchedCoin.market_cap_rank && (
        <h5>Market Cap rank: {searchedCoin.market_cap_rank}</h5>
      )}
      <img
        src={searchedCoin.image}
        alt={searchedCoin.name}
        className="logoCoin"
      />
      <h5>
        {searchedCoin.name} ({searchedCoin.symbol.toUpperCase()})
      </h5>
      <table className="striped centered">
        <tbody>
          <tr>
            <td>Current price:</td>
            <td>${searchedCoin.current_price.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Price change in the last 24 hours:</td>
            {searchedCoin.price_change_percentage_24h > 0 ? (
              <td className="positive_price_change24">
                +{searchedCoin.price_change_percentage_24h.toLocaleString()}%
              </td>
            ) : (
              <td className="negative_price_change24">
                {searchedCoin.price_change_percentage_24h.toLocaleString()}%
              </td>
            )}
          </tr>
          <tr>
            <td>Market cap:</td>
            <td>${searchedCoin.market_cap.toLocaleString()}</td>
          </tr>
          <tr>
            <td>All time high:</td>
            <td>${searchedCoin.ath.toLocaleString()}</td>
          </tr>
          <tr>
            <td>All time high change percentage:</td>
            {searchedCoin.ath_change_percentage > 0 ? (
              <td className="positive_price_change24">
                +{searchedCoin.ath_change_percentage.toLocaleString()}%
              </td>
            ) : (
              <td className="negative_price_change24">
                {searchedCoin.ath_change_percentage.toLocaleString()}%
              </td>
            )}
          </tr>
          <tr>
            <td>All time high date:</td>
            <td>{searchedCoin.ath_date.toLocaleString()}</td>
          </tr>
          <tr>
            <td>All time low:</td>
            <td>${searchedCoin.atl.toLocaleString()}</td>
          </tr>
          <tr>
            <td>All time low change percentage:</td>
            {searchedCoin.atl_change_percentage > 0 ? (
              <td className="positive_price_change24">
                +{searchedCoin.atl_change_percentage.toLocaleString()}%
              </td>
            ) : (
              <td className="negative_price_change24">
                {searchedCoin.atl_change_percentage.toLocaleString()}%
              </td>
            )}
          </tr>
          <tr>
            <td>All time low date:</td>
            <td>{searchedCoin.atl_date.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Circulating supply:</td>
            <td>{searchedCoin.circulating_supply.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Highest value in the last 24 hours:</td>
            <td>{searchedCoin.high_24h.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Lowest value in the last 24 hours:</td>
            <td>{searchedCoin.low_24h.toLocaleString()}</td>
          </tr>
          {searchedCoin.max_supply && (
            <tr>
              <td>Max supply:</td>
              <td>{searchedCoin.max_supply.toLocaleString()}</td>
            </tr>
          )}
          {searchedCoin.total_supply && (
            <tr>
              <td>Total supply:</td>
              <td>{searchedCoin.total_supply.toLocaleString()}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Coin;
