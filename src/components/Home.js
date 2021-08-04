import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Home.css';

const perPage = 20;

const Home = ({ coinData }) => {
  // console.log(coinData);
  const [pagination, setPagination] = useState({
    start: 0,
    end: perPage
  });

  const handlePrev = () => {
    if (pagination.start - perPage >= 0) setPagination({
      start: pagination.start - perPage,
      end: pagination.end === perPage ? perPage : pagination.end - perPage
    });
  }

  const handleNext = () => {
    if (pagination.start + perPage < coinData.length) setPagination({
      start: pagination.start + perPage,
      end: pagination.end === coinData.length ? pagination.end : pagination.end + perPage
    });
  }
  
  return (
    <div className="z-depth-2" id="big-coins">
      <h5>CRYPTOCURRENCY PRICES BY MARKET CAP:</h5>

      <table class="striped centered ">
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
          {coinData.slice(pagination.start, pagination.end).map((coin, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{index + 1 + pagination.start}</td>
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

      <div className="row parent-buttons">
        <div className="child-buttons">
          {coinData && (
            <button
              className="btn z-depth-2"
              id="white_equal_size_button"
              onClick={handlePrev}
            >
              <i class="material-icons left">navigate_before</i>
              Previous
            </button>
          )}
        </div>
        <div className="child-buttons">
          {coinData && (
            <buton
              className="btn z-depth-2"
              id="white_equal_size_button"
              onClick={handleNext}
            >
              <i className="material-icons right">navigate_next</i>
              Next
            </buton>
          )}
        </div>
      </div>

    </div>
  );
};

export default Home;
