import React from 'react';
import '../styles/Wiki.css';

const Wiki = () => {
  return (
    <div className="z-depth-2" id="wiki">
      <h5>RESOURCES LIST:</h5>

      <div className="row">
        <div className="col s6">
          <h5>Your crypto resources:</h5>
          <table className="centered" id="rows-wiki">
            <thead>
              <tr>
                <th>Site</th>
                <th>Description</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://www.coingecko.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-shadow"
                  >
                    CoinGecko
                  </a>
                </td>
                <td>Prices</td>
                <td>
                  <a className="material-icons tiny delete">delete_forever</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.binance.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-shadow"
                  >
                    Binance
                  </a>
                </td>
                <td>Exchange</td>
                <td>
                  <a className="material-icons tiny delete">delete_forever</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://entethalliance.org/eea-members/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-shadow"
                  >
                    Ethereum Alliance
                  </a>
                </td>
                <td>Organization</td>
                <td>
                  <a className="material-icons tiny delete">delete_forever</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://cryptopanic.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-shadow"
                  >
                    Crypto Panic
                  </a>
                </td>
                <td>News</td>
                <td>
                  <a className="material-icons tiny delete">delete_forever</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://messari.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-shadow"
                  >
                    Messari
                  </a>
                </td>
                <td>Prices</td>
                <td>
                  <a className="material-icons tiny delete">delete_forever</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.reddit.com/r/CryptoCurrency/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-shadow"
                  >
                    Reddit - Cryptocurrency News & Discussion
                  </a>
                </td>
                <td>Forum</td>
                <td>
                  <a className="material-icons tiny delete">delete_forever</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://coinmarketcap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-shadow"
                  >
                    CoinMarketCap
                  </a>
                </td>
                <td>Prices</td>
                <td>
                  <a className="material-icons tiny delete">delete_forever</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-shadow"
                  >
                    TradingView
                  </a>
                </td>
                <td>Analyse</td>
                <td>
                  <a className="material-icons tiny delete">delete_forever</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://glassnode.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-shadow"
                  >
                    Glassnode
                  </a>
                </td>
                <td>Analyse</td>
                <td>
                  <a className="material-icons tiny delete">delete_forever</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://cointrendz.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-shadow"
                  >
                    CoinTrendz
                  </a>
                </td>
                <td>Alerts</td>
                <td>
                  <a className="material-icons tiny delete">delete_forever</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.cryptocompare.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-shadow"
                  >
                    CryptoCompare
                  </a>
                </td>
                <td>Analyse</td>
                <td>
                  <a className="material-icons tiny delete">delete_forever</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://bitinfocharts.com/cryptocurrency-charts.html?__cf_chl_jschl_tk__=pmd_b7cfb114480903a3d190ec437e4ac7f98408019c-1627726091-0-gqNtZGzNAeKjcnBszQii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-shadow"
                  >
                    BitInfoCharts
                  </a>
                </td>
                <td>Analyse</td>
                <td>
                  <a className="material-icons tiny delete">delete_forever</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://icodrops.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-shadow"
                  >
                    IcoDrops
                  </a>
                </td>
                <td>ICOs</td>
                <td>
                  <a className="material-icons tiny delete">delete_forever</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://coinlist.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-shadow"
                  >
                    Coinlist
                  </a>
                </td>
                <td>ICOs</td>
                <td>
                  <a className="material-icons tiny delete">delete_forever</a>
                </td>
              </tr>

              <tr>
                <td>
                  <a
                    href="https://defirate.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-shadow"
                  >
                    DeFi Rate
                  </a>
                </td>
                <td>DeFi</td>
                <td>
                  <a className="material-icons tiny delete">delete_forever</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col s6">
          <h5>Insert a favourite link:</h5>
          <input
            placeholder="Link address"
            id="first_name"
            type="text"
            class="validate"
          />
          <button
            type="sumbit"
            className="btn-floating btn-large waves-effect waves-light red"
          >
            <i className="material-icons">add</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wiki;
