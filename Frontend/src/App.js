import React, { useState } from 'react';
import SignUpForm from './Components/signup-signin/SignInPage';
import SignInForm from './Components/signup-signin/SignUpPage';
import './App.css';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`container ${isSignUp ? 'sign-up-mode' : 'sign-in-mode'}`}>
      <div className="forms-container">
        <SignInForm />
        {/* {isSignUp ? <SignUpForm toggleForm={toggleForm} /> : <SignInForm toggleForm={toggleForm} />} */}
        {/* {isSignUp ? <SignUpForm toggleForm={toggleForm} /> : '' } */}
         {/* {isSignUp ? '': <SignInForm toggleForm={toggleForm} />} */}
      </div>
    </div>
  );
}

export default App;
