import './about.scss';
import '../../assets/styles/global.scss';
import { Footer, Header, Sidebar, AboutDeiMobile } from '../../components';
import { curlyBraces } from '../../assets/images';
import { useDesktop } from '../../contexts/DesktopContext';
import { Outlet } from 'react-router-dom';

const About = () => {
  const { isDesktop } = useDesktop();

  return (
    <div className="about-dei">
      <div className="header">
        <Header />
        <div className="container jumbotron__container">
          <img src={curlyBraces} alt="badging-logo" />
          <h1>About DEI Badging</h1>
        </div>
      </div>
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
      <Footer />
    </div>
  );
};

export default About;
