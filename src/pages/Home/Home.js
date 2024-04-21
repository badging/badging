import React, { useState, useEffect } from 'react';
import { chaossLogo, gitLabLogo, githubSponsor } from "../../assets/images";
import Nav from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./home.scss";
import { fetchProjects } from '../../hooks/fetchProjects';
import settings from '../../settings.json';

const Home = () => {
  const [eventsCount, setEventsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0); 

  useEffect(() => {
    fetchProjects(`${settings.API_BASE_URL}/badgedRepos`)
      .then(data => {
        setProjectsCount(data.length);
      })
      .catch(error => console.error('Error fetching projects:', error));
    
    fetchProjects(`${settings.API_BASE_URL}/badged_events`)
      .then(data => {
        setEventsCount(data.length);
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="home-container ">
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
          <p>{eventsCount} events and {projectsCount} projects badged</p>
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
