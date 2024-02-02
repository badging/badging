import "./about.scss";
import "../../assets/styles/global.scss";
import { Footer, Header, Sidebar, AboutDeiMobile } from "..";
import { curlyBraces } from "../../assets/images";
import { useDesktop } from "../../contexts/DesktopContext";
import { Outlet } from "react-router-dom";

const AboutNew = () => {
  const { isDesktop } = useDesktop();

  return (
<<<<<<< HEAD
    <div className="about-dei">
      {/* <div className="header">
        <Header />
        <div className="container jumbotron__container">
          <img src={curlyBraces} alt="badging-logo" />
          <h1>About CHAOSS DEI Project Badging</h1>
        </div>
      </div> */}
=======
    <div className="about-dei">    
>>>>>>> 4644e8a (fixing)
      <main className="container">
        <div className="main__container">
          {isDesktop && (
            <>
              <aside className="page__nav">
                <Sidebar />
              </aside>
              <section className="page__content">
                <Outlet />
              </section>
            </>
          )}
          {!isDesktop && (
            <section className="page__content">
              <AboutDeiMobile />
            </section>
          )}
        </div>
      </main>
<<<<<<< HEAD
      {/* <Footer /> */}
=======
>>>>>>> 4644e8a (fixing)
    </div>
  );
};

export default AboutNew;
