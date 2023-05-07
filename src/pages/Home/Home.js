import '../../assets/styles/global.scss';
import './home.scss';
import {
  Footer,
  Header,
  Faq,
  CardComponent,
  CardCarousel,
} from '../../components';

import { faqData } from '../../components/Faq/data';
import { featuredProjects, howItWorksData } from './data';

const Home = () => {
  return (
    <div>
      <Header />
      <CardCarousel />
      <div className="how-it-works">
        <div className="projects wrap">
          <p className="text-lg">
            Join 150+ open source projects trusting us to badge their projects.
          </p>
          <div className="logos">
            {featuredProjects.map((project, index) => (
              <div className="img-wrap" key={index}>
                <img src={project.logo} alt={`${project.name} logo`} />
              </div>
            ))}
          </div>
        </div>
        <div className="content-wrap wrap">
          <div className="content">
            <div>
              <h2>How it Works</h2>
              <p className="text-lg">
                Join us in our mission to promote Diversity, Equity, and
                Inclusion in the workplace! <br />
                Recognize and reward DEI efforts with our innovative project
                badging system, and inspire
              </p>
            </div>
            <div className="cards">
              {howItWorksData.map(({ id, title, text, link, icon }) => {
                return (
                  <CardComponent
                    key={id}
                    title={title}
                    text={text}
                    link={link}
                    icon={icon}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <section className="container">
        <div className="faq">
          <h2>Still Have Questions</h2>
          {faqData.map(({ question, answer }, id) => {
            return <Faq key={id} question={question} answer={answer} />;
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
