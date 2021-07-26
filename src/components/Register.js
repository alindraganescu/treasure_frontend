import React from 'react';

const Register = () => {
  return (
    <>
      <h3>Register Page</h3>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="username" type="text" className="validate" />
              <label for="username">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="password" type="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="email" type="email" className="validate" />
              <label for="email">Email</label>
            </div>
          </div>
        </form>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
    </>
  );
};

export default Register;
