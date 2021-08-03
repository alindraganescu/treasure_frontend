import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  var d = new Date();
  var y = d.getFullYear();

  return (
    <div>
      <footer
        className=""
        id="footer"
        // style={{
        //   backgroundColor: '#065471',
        //   color: '#FFC045',
        //   height: '50px',
        //   padding: '10px',
        // }}
      >
        <div id="child-footer" className="row footer-text footer-parent small-shadow">
          <div className="footer-child">
            <span className="grey-text text-lighten-4">
              Treasure © {y} Alin Draganescu
            </span>
          </div>
          <div className="footer-child">
            <span className="grey-text text-lighten-4">
              Crypto Market Prices: CoinGecko
            </span>
          </div>
          <div className="footer-child">
            <span className="grey-text text-lighten-4">
              Alerts: Cryptocurrency Alerting
            </span>
          </div>
          <div className="footer-child">
            <span className="grey-text text-lighten-4">News: Newsdata.io</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
