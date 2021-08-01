import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  var d = new Date();
  var y = d.getFullYear();

  return (
    <div>
      <footer
        className="page-footer"
        id="footer"
        // style={{
        //   backgroundColor: '#065471',
        //   color: '#FFC045',
        //   height: '50px',
        //   padding: '10px',
        // }}
      >
        <div className="small-shadow">
          <div className="row text">
            <div className="col l3 s12">
              <span className="grey-text text-lighten-4">
                Treasure © {y} Alin Draganescu
              </span>
            </div>
            <div className="col l3 s12">
              <span className="grey-text text-lighten-4">
                Crypto Market Prices: CoinGecko
              </span>
            </div>
            <div className="col l3 s12">
              <span className="grey-text text-lighten-4">
                Alerts: Cryptocurrency Alerting
              </span>
            </div>
            <div className="col l3 s12">
              <span className="grey-text text-lighten-4">
                News: Newsdata.io
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
