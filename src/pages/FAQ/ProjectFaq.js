import React from 'react';
import { faqData } from '../../components/Faq/data';
import { Footer, Header, FaqSidebar, Faq } from '../../components';
import { slack, bgRecent } from '../../assets/images';
import './newfaq.scss';

const ProjectFaq = () => {
  return (
    <div className="faq">
      <div className="header">
        <Header />
      </div>
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

          <p> Do you have more questions? Join our community to learn more.</p>
          <img src={slack} alt="faq background" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectFaq;
