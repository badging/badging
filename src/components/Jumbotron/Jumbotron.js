import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/global.scss";
import "./jumbotron.scss";
import { Header } from "..";

const Jumbotron = ({title}) => {
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
<<<<<<< HEAD
      
        {/* <img src={curlyBraces} alt="badging-logo" /> */}
=======
>>>>>>> 4644e8a (fixing)
        <h1>{title}</h1>
        
      </div>
      </main>
    </>
  );
};

export default Jumbotron;
