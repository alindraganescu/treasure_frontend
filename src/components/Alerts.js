import React from 'react';

const Alerts = () => {
  return (
    <>
      <h3>Alerts Page</h3>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="username" type="text" className="validate" />
              <label for="username">Cryptocurrency</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="password" type="password" className="validate" />
              <label for="password">Value</label>
            </div>
          </div>
          <a className="btn-floating btn-large waves-effect waves-light red">
            <i class="material-icons">add</i>
          </a>
        </form>
      </div>
    </>
  );
};

export default Alerts;