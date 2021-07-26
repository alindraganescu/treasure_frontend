import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <>
      <nav style={{ backgroundColor: '#065471', color: '#FFC045' }}>
        <div class="nav-wrapper">
          <img
            src="../public/treasure_logo"
            alt="company logo"
            // className="brand-logo"
            // style={{ paddingLeft: '5rem' }}
          />

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/wiki">Wiki</NavLink>
            </li>
            <li>
              <NavLink to="/alerts">Alerts</NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="waves-effect waves-light btn"
                id="special_button"
              >
                <i className="material-icons left">account_circle</i>Account
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      ;
    </>
  );
};

export default Header;

{
  /* <a id="special_button" className="waves-effect waves-light btn">
            button
          </a>
          <a className="waves-effect waves-light btn special_button">
            <i className="material-icons left">cloud</i>button
          </a> */
}
