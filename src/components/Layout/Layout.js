/* eslint-disable react/prop-types */
import React from "react";
import { Footer, Header } from "../../components";
import { getBadgedFullBG, getBadgedMobile } from "../../assets/images";
<<<<<<< HEAD
import "./Layout.scss";
=======
import "./Layout.scss"
>>>>>>> 4644e8a (fixing)

// Pass the child props
const Layout = ({ children, className }) => {
  return (
    <div>
      <Header />
      <div className="requirements">
        {/* Attaching all file components */}

        <div className="section-one">
          <img
            className="bg-getStarted"
<<<<<<< HEAD
            src={getBadgedFullBG}
=======
            src={getBadgedFullBG} 
>>>>>>> 4644e8a (fixing)
            alt="hero section desktop background"
          />
          <img
            className="bg-mobile-getStarted"
            src={getBadgedMobile}
            alt="hero section mobile background"
<<<<<<< HEAD
            // style={{ width: '100%' }}
          />
        </div>
        {/* <div className="section-two"> */}
        <div className={className}>{children} </div>
        {/* {children} */}
        {/* </div> */}
=======
          />
        </div>
        <div className={className}>{children} </div>
>>>>>>> 4644e8a (fixing)
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
