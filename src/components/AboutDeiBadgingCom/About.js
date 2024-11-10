import "./about.scss";
import "../../assets/styles/global.scss";
import { Sidebar, AboutDeiMobile } from "..";
import { useDesktop } from "../../contexts/DesktopContext";
import { Outlet } from "react-router-dom";

const AboutNew = () => {
  const { isDesktop } = useDesktop();

  return (
    <div className="about-dei">
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
    </div>
  );
};

export default AboutNew;
