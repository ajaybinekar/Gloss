import React, { useState } from 'react';
import SignInForm from './SignInPage';
import SignUpForm from './SignUpPage';
import './App.css';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        {isSignUp ? <SignUpForm toggleForm={toggleForm} /> : <SignInForm toggleForm={toggleForm} />}
      </div>
    </div>
  );
}

export default App;
