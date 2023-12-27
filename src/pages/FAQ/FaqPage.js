import React from 'react';
import { faqData } from '../../components/Faq/data';
// import Faq from './Faq';
import './newfaq.scss';
import { Footer, Header, Faq, FaqSidebar } from '../../components';
import { slack, bgRecent } from '../../assets/images';

// import { useMediaQuery } from 'react-responsive';

const FaqPage = () => {
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
        <section className="faqpage">
          {faqData.map(({ question, answer }, id) => {
            return <Faq key={id} question={question} answer={answer} />;
          })}

          <p>Do you have more questions? Join our community to learn more.</p>

          <img src={slack} alt="faq background" />
        </section>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default FaqPage;
