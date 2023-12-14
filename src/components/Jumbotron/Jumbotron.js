import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/global.scss";
import "./jumbotron.scss";
import { Header } from "..";

const Jumbotron = () => {
  return (
    <>
      <main>
        <div className='overlay'>
            <div className='bgRight'></div>
            <div className='bgCenter'></div>
            <div className='bgLeft'></div>
        </div>
      <Header />
      <div className="container jumbotron__container">
      
        {/* <img src={curlyBraces} alt="badging-logo" /> */}
        <h1>Event Badging</h1>
        <div className="about-project">
          <button onClick={() =>swapHandler('about')} className={swap == 'about' ? 'buttonActive' : 'buttonInActive'}>About Project Badging</button>
          <a href="/about-project-badging">Badged Projects</a>
          {/* <button onClick={() => swapHandler('project')} className={swap == 'project' ? 'buttonActive' : 'buttonInActive'}>Badged Projects</button> */}
        </div>
      </div>
      </main>
    </>
  );
};

export default Jumbotron;
