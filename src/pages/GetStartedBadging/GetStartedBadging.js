import React from 'react';
import { Footer, Header } from '../../components';

import '../../assets/styles/global.scss';
import './getStartedBadging.scss';

const GetStartedBadging = () => {
  return (
    <div>
      <Header />
      <div className="requirements">
        <div className="section-one">
          <h1> Getting Started With Project Badging</h1>
        </div>

        <div className="section-two">
          <div className="section-title">
            <h2>Prerequisite</h2>
          </div>
          <ol className="section-list">
            <li>A Github Repository</li>
            <li>Must be Project Admin or Maintainer</li>

            <li>The Project must be Open Source</li>
            <li>Ensure you have your DEI.md File</li>
          </ol>

          <div className="login-github">
            <button className="login-github">Login with GitHub</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GetStartedBadging;
