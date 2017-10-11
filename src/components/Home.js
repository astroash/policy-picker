import React from 'react';
import Icon from './Icon';
import { Link } from 'react-router-dom';

import '../css/Home.css';

const Home = ({ changeTopic }) => {
  return (
    <section id="home" className="center tc">
      <div className="row">
        <Link to="/tax">
          <Icon topic="Tax" cssImg="tax" changeTopic={changeTopic} />
        </Link>
        <Link to="/ownership">
          <Icon topic="Ownership" cssImg="own" changeTopic={changeTopic} />
        </Link>
      </div>
      <div className="row">
        <Link to="/technology">
          <Icon topic="Technology" cssImg="tech" changeTopic={changeTopic} />
        </Link>
        <Link to="/welfare">
          <Icon topic="Welfare" cssImg="wel" changeTopic={changeTopic} />
        </Link>
      </div>
      <div className="row">
        <Link to="/workplace">
          <Icon topic="Workplace" cssImg="work" changeTopic={changeTopic} />
        </Link>
        <Link to="/askanmp">
          <Icon topic="Ask an MP" cssImg="ask" changeTopic={changeTopic} />
        </Link>
      </div>
    </section>
  );
};

export default Home;
