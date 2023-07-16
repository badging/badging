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
import { heroImage, howItWorks } from '../../assets/images';
import zIndex from '@mui/material/styles/zIndex';
import { useMediaQuery } from 'react-responsive';
// import "../../assets/images/others/bg-how-it-works-web.png"

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 650 });
  return (
    <div>
      <Header />
      <div className="sub-nav" 
      style={{ 
        background:`url(${howItWorks}) top center no-repeat`, 
        }}
        >
        <div className="hero-section">
          <div className="title">DEI Project Badging</div>
          <div className="parra">
            <div className="description">
              <div className="shape"></div>
              Join us on our mission to recognize the exemplary DEI efforts
              within open-source projects and communities. Whether you have
              implemented a welcoming environment or fostered a diverse and
              inclusive practice, we want to celebrate your achievements and
              recognize the DEI efforts within your open-source projects. Take
              the steps towards prioritizing and advancing DEI within your
              project and the broader open-source community.
            </div>
          </div>
        </div>
        <CardCarousel />
      </div>
      <div className="how-it-works" 
      style={{ 
        backgroundImage:`url(${!isMobile ? '' : howItWorks})`, 
        height:"100%", 
        width:'100%',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'
        // position:'absolute'
        }}
        >
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
              With the help of a DEI.md file, we can delve into a project's DEI 
              effort and highlight the maintainers' focus on CHAOSS's DEI metrics. 
              The file will enable us to assess and validate a project's DEI efforts 
              based on Project Access, Communication Transparency, Newcomer Experience, 
              and Inclusive Leadership metrics. We provide comprehensive reports and 
              insight to maintainers to enable them to reflect on and address the 
              requirements to foster more diverse and healthy open-source communities.
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
      {/* <div className="main" style={{ 
        backgroundImage:`url(${heroImage})`, 
        height:"500px", 
        width:'100%',
        backgroundRepeat:'no-repeat',
        }}>
        hello 
      </div> */}
      <section className="container"
      
      >
        <div className="faq"
         style={{ 
          background:`url(${howItWorks}) top right no-repeat`, 
          }}
        >
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
