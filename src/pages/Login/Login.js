import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div>
        <h1>Login</h1>
        <p>
          Don't have an account yet? <Link to="/sign-up">Get started here</Link>
        </p>
      </div>
      <form>
        <div>
          <label>Email Address</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
