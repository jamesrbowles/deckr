import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../hooks/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { createUser, googleSignIn, user } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      /*       navigate('/account'); */
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      /*      navigate('/account'); */
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
    <div>
      <div>
        <h1>Get Started</h1>
        <p>
          Already have an account yet? <Link to="/login">Login here</Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Sign Up</button>
      </form>
      <div>
        <FcGoogle onClick={handleGoogleSignIn} />
        <div>Continue with Google</div>
      </div>
    </div>
  );
};

export default Signup;
