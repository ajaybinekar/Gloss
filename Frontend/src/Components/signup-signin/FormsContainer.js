import React from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Panel from './Panel';

function FormsContainer({ toggleMode }) {
  return (
    <div className="forms-container">
      <div className="signin-signup">
        <SignInForm />
        <SignUpForm />
      </div>
      <Panel toggleMode={toggleMode} />
    </div>
  );
}

export default FormsContainer;
