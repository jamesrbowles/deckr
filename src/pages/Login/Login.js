import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../hooks/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, googleSignIn, user } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="flex flex-col justify-center w-6/12 max-w-lg  mx-auto">
      <header>
        <h1 className="mt-[75px] text-4xl py-5 mb-5 text-left">Login</h1>
      </header>
      <div
        className="border border-gray-600 hover:bg-gray-600 rounded-md flex justify-center items-center py-3 w-full mx-auto px-10 cursor-pointer"
        onClick={handleGoogleSignIn}
      >
        <FcGoogle className="text-xl" />
        <div className="ml-3 font-bold">Continue with Google</div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="my-8"
      >
        <div className="input-group">
          <label
            className="input-group__label"
            htmlFor="emailInput"
          >
            Email
          </label>
          <input
            id="emailInput"
            className="mb-5 input-group__input"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
          />
        </div>

        <div className="input-group">
          <label
            className="input-group__label"
            htmlFor="passwordInput"
          >
            Password
          </label>
          <input
            id="passwordInput"
            className="mb-4 input-group__input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password..."
          />
        </div>
        <button className="bg-gray-600 border border-gray-600 hover:bg-opacity-50 rounded-md w-full py-3 text-lg">
          Log in
        </button>
      </form>

      <p>
        Don't have an account yet?{' '}
        <Link
          to="/sign-up"
          className="underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
