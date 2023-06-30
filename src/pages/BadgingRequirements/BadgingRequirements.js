import React from 'react';
import { Footer, Header } from '../../components';
import { Link } from 'react-router-dom';
import '../../assets/styles/global.scss';
import './badgingRequirements.scss';

const BadgingRequirements = () => {
  const handleLogin = () => {
    window.location.href = '/login';
  };
  return (
    <div>
      <Header />
      <div className="requirements">
        <h1>Badging Requirements</h1>
        <section className="first-section">
          <div className="requirement first-requirement">
            <p className="top">1. You need a GitHub Account</p>
            <p className="detail">
              You will need to give us access to your Project Repository hence
              you should have an active GitHub Account.
            </p>
          </div>
          <div className="requirement">
            <p className="top">
              {' '}
              2. You must be either an Admin or Maintainer of the project who
              Repository you intend to submit
            </p>
            <p className="detail">
              You will need to give us access to your Project Repository hence
              you should have an active GitHub Account.
            </p>
          </div>
        </section>
        <section className="second-section">
          <p>
            If you have successfully fulfilled the above requirements you can
            proceed to Login with GitHub.
          </p>
          <button className="github" onClick={handleLogin}> Login with GitHub</button>
          <Link
            to="https://github.com/join"
            target="_blank"
            className="create-github"
          >
            Create a GitHub Account
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BadgingRequirements;
