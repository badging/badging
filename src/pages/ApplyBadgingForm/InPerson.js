import React, { useState } from "react";
import "../../assets/styles/global.scss";
import "./inperson.scss";
import { Footer, Header } from "../../components";

// import AboutNew from '../../components/AboutDeiBadgingCom/About';
// import PageOne from '../../components/ApplyForm/PageOne';
// import PageTwo from '../../components/ApplyForm/PageTwo';
import FormContainer from "../../components/ApplyForm/InPersonForm/FormContainer";

import VirtualContainer from "../../components/ApplyForm/VirtualForm/VirtualContainer";

const InPerson = () => {
  const [swap, setSwap] = useState("inperson");

  const swapHandler = (toggle) => {
    setSwap(toggle);
  };

  return (
    <main>
      <div className="overlay">
        <div className="bgRight"></div>
        <div className="bgCenter"></div>
        <div className="bgLeft"></div>
      </div>
      <Header />
      <div className="container jumbotron__container">
        {/* <div className='overlay'>
        <div className='bgRight'></div>
        <div className='bgCenter'></div>
        <div className='bgLeft'></div>
      </div> */}
        {/* <img src={curlyBraces} alt="badging-logo" /> */}
        <h1>Apply For Event Badging</h1>
        <div className="about-project">
          <button
            onClick={() => swapHandler("inperson")}
            className={`ml-0 ${
              swap == "inperson" ? "buttonActive" : "buttonInActive"
            }`}
          >
            In-Person Event
          </button>
          <button
            onClick={() => swapHandler("virtual")}
            className={swap == "virtual" ? "buttonActive" : "buttonInActive"}
          >
            Virtual Event
          </button>
        </div>
      </div>

      <section className="virtual bg-white">
        {swap && swap == "virtual" ? <VirtualContainer /> : <FormContainer />}
      </section>
      <Footer />
    </main>
  );
};

export default InPerson;
