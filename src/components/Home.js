import React from 'react';
import Icon from './Icon';
import { Link } from 'react-router-dom';

import '../css/Home.css';

const Home = props => {
  return (
    <section id="home" className="center w-50">
      <Link to="/tax">
        <Icon topic="Tax" css="tax" />
      </Link>
      <Link to="/ownership">
        <Icon topic="Ownership" css="own" />
      </Link>
      <Link to="/technology">
        <Icon topic="Technology" css="tech" />
      </Link>
      <Link to="/welfare">
        <Icon topic="Welfare" css="wel" />
      </Link>
      <Link to="/workplace">
        <Icon topic="Workplace" css="work" />
      </Link>
      <Link to="/askanon">
        <Icon topic="Ask Ed" css="ask" />
      </Link>
    </section>
  );
};

export default Home;
