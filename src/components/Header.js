import React from 'react';

const Header = () => {
  return (
    <>
      <nav style={{ backgroundColor: '#065471', color: '#FFC045' }}>
        <div class="nav-wrapper">
          <a href="#" className="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Home</a>
            </li>
            <li>
              <a href="sass.html">News</a>
            </li>
            <li>
              <a href="sass.html">Portfolio</a>
            </li>
            <li>
              <a href="badges.html">Wiki</a>
            </li>
            <li>
              <a href="collapsible.html">Alerts</a>
            </li>
          </ul>
        </div>
      </nav>
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
