import React from 'react';

const Register = ({ onAuth, onSetCredentials }) => {
  return (
    <>
      <h4>REGISTER PAGE:</h4>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="username"
                type="text"
                className="validate"
                onChange={(e) => onSetCredentials(e)}
              />
              <label for="username">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="password"
                type="password"
                className="validate"
                onChange={(e) => onSetCredentials(e)}
              />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="email"
                type="email"
                className="validate"
                onChange={(e) => onSetCredentials(e)}
              />
              <label for="email">Email</label>
            </div>
          </div>
        </form>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick={() => onAuth()}
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
    </>
  );
};

export default Register;
