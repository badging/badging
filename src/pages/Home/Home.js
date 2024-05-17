import React, { useState, useEffect } from 'react';
import { chaossLogo, gitLabLogo, githubSponsor } from "../../assets/images";
import "../../assets/styles/global.scss";
import Nav from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./home.scss";
import settings from '../../settings.json';
import TickBadge from '../../assets/images/icons/tick-badge.svg';

const Home = () => {
  const [eventsCount, setEventsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsResponse, projectsResponse] = await Promise.all([
          fetch(`${settings.API_BASE_URL}/badged_events`),
          fetch(`${settings.API_BASE_URL}/badgedRepos`)
        ]);

        if (!eventsResponse.ok || !projectsResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const [eventsData, projectsData] = await Promise.all([
          eventsResponse.json(),
          projectsResponse.json()
        ]);

        setEventsCount(eventsData.length);
        setProjectsCount(projectsData.length);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <Nav />

      <div className="overlay">
        <div className="bgRight"></div>
        <div className="bgCenter"></div>
        <div className="bgLeft"></div>
      </div>

      <section className="hero container-new">
        <div className="hero-header">
          <h1>CHAOSS DEI Badging Initiative</h1>
          <div>
            <p>
              The CHAOSS DEI Badging Initiative is a{" "}
              <a href="https://chaoss.community">CHAOSS</a>
              project that awards badges to open-source projects and events.
              These badges are used to showcase commitment to improving and
              supporting diversity, equity, and inclusion.
            </p>
          </div>
        </div>

        <div className="numbers-count-label">
          {isLoading ? (
            <p className="loading-text">Loading Content...</p>
          ) : error ? (
            <p className="error-text badge-text">
              {error}
            </p>
          ) : (
          <div className="badge-count">
            <div className="counts">
              <div className="count-section">
                <span className="count-numbers">{eventsCount}</span>
                <span className="count-numbers-text">Badged Events</span>
              </div>
              <div className="count-section">
                <span className="count-numbers">{projectsCount}</span>
                <span className="count-numbers-text"> Badged Projects</span>
              </div>
            </div>
          </div>
          )}
        </div>

        <div className="sponsors">
          <div className="s-list">
            <p>Founding Partner</p>
            <div className="sponsors-logo">
              <img src={githubSponsor} alt="logo" width={80} height={20} />
            </div>
          </div>
          <div className="s-list">
            <p>Contributing Partners</p>
            <div className="sponsors-logo">
              <img src={gitLabLogo} alt="logo" width={90} height={20} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
