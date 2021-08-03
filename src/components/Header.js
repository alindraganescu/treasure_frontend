import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/treasure_logo.png';

const Header = () => {
  return (
    <>
      <nav
        style={{
          backgroundColor: '#065471',
          color: '#FFC045',
          // height: '70px',
        }}
      >
        <div className="nav-wrapper">
        {/* <div> */}
          <img
            src={logo}
            className="main-logo"
            alt="company logo"
            // className="brand-logo"
            // style={{ paddingLeft: '5rem' }}
          />
        {/* </div> */}
        {/* <div> */}
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="small-shadow">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="small-shadow">
              <NavLink to="/news">News</NavLink>
            </li>
            <li className="small-shadow">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="small-shadow">
              <NavLink to="/alerts">Alerts</NavLink>
            </li>
            <li className="small-shadow">
              <NavLink to="/wiki">Resources</NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="waves-effect waves-light btn z-depth-2"
                id="special_button"
              >
                <i className="material-icons left">account_circle</i>
                Account
              </NavLink>
            </li>
          </ul>
        {/* </div> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
