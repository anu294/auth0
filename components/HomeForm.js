import React, { useState } from 'react';
import Icon from './Icon';
import Button from './Button';
//import SignUpForm from 'components/SignUpForm';
//import LogInForm from 'components/LogInForm';
//import IWannaTestItLoginButton from 'components/IWannaTestItLoginButton';
import colors from '../lib/colors';
import Link from 'next/link';

//import login from '../pages/api/login'
function fetcher(url) {
  return fetch(url).then(r => r.json());
}
const HomeForm = () => {
  const [phase, setPhase] = useState('');
  let that = this;
  const handleSignUpClick = () => {
    //that.context.router.push('/api/login');
    //useSWR('/api/login', fetcher);
    //setPhase('signup');
  };

  const handleLogInClick = () => {
    setPhase('login');
  };

  const handleBackClick = () => {
    setPhase('none');
  };

  if (phase === 'login') {
    //return <LogInForm onBack={handleBackClick} />;
  }

  if (phase === 'signup') {
    //return <SignUpForm onBack={handleBackClick} />;
  }

  return (
    <div className="home-form">
      <Icon name="bird" color={colors.twitterBlue} size="45px" />
      <h1>See what’s happening in the world right now</h1>
      <h2>Join Twitter today.</h2>
      <Link href="/api/login">
      <Button primary full narrow>
        Join Us
      </Button></Link>

      {/* <Button full narrow onClick={handleLogInClick}>
        Log In
      </Button>

      <IWannaTestItLoginButton /> */}

      <style jsx>{`
        .home-form {
          max-width: 350px;
        }

        h1 {
          color: rgba(0, 0, 0, 0.85);
          font-size: 1.9em;
          font-weight: bold;
          line-height: 1.1em;
        }

        h2 {
          margin-top: 2rem;
          color: rgba(0, 0, 0, 0.85);
          font-size: 1.25em;
          font-weight: bold;
        }

        .home-form :global(button) {
          margin: 16px 0 0;
        }
      `}</style>
    </div>
  );
};

export default HomeForm;
