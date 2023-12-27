import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './accordionData';
import {
  Footer,
  Header,
  // Faq,
} from '../../components';

export const DisplayAccordion = () => {
  return (
    <div>
      <Header />{' '}
      <div className="accordion">
        {accordionData.map(({ title, content }, id) => {
          return <Accordion key={id} title={title} content={content} />;
          // eslint-disable-next-line react/jsx-key
        })}
      </div>
      <Footer />
    </div>
  );
};
