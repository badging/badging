import React from 'react';
import { faqData } from '../../components/Faq/data';
import { Footer, Header, FaqSidebar, Faq } from '../../components';
import { slack, bgRecent } from '../../assets/images';
import './faq.scss';

const ProjectFaq = () => {
  return (
    <div className="faq">
      <Header />

      <div className="faq-img">
        <img src={bgRecent} alt="faq background" />
      </div>

      <main className=" faq_container">
        <aside className="sidebar">
          <FaqSidebar />
        </aside>
        <section className="faqPage">
          {faqData.map(({ question, answer }, id) => {
            return <Faq key={id} question={question} answer={answer} />;
          })}

          <p id="learn-more">
            {' '}
            Do you have more questions? Join our community to learn more.
          </p>
          <a
            href="https://github.com/badging/badging"
            alt="chaoss github link"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <img src={slack} alt="faq background" />
          </a>
        </section>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectFaq;
