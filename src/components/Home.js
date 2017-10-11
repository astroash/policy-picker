import React from 'react';
import Icon from './Icon';
import { Link } from 'react-router-dom';

import '../css/Home.css';

const Home = ({ changeTopic }) => {
  return (
    <section id="home" className="center w-50">
      <Link to="/tax">
        <Icon topic="Tax" cssImg="tax" changeTopic={changeTopic} />
      </Link>
      <Link to="/snippet">
        <Icon topic="Snippet" cssImg="tax" changeTopic={changeTopic} />
      </Link>
      <Link to="/ownership">
        <Icon topic="Ownership" cssImg="own" changeTopic={changeTopic} />
      </Link>
      <Link to="/technology">
        <Icon topic="Technology" cssImg="tech" changeTopic={changeTopic} />
      </Link>
      <Link to="/welfare">
        <Icon topic="Welfare" cssImg="wel" changeTopic={changeTopic} />
      </Link>
      <Link to="/workplace">
        <Icon topic="Workplace" cssImg="work" changeTopic={changeTopic} />
      </Link>
      <Link to="/askanon">
        <Icon topic="Ask Anon" cssImg="ask" changeTopic={changeTopic} />
      </Link>
    </section>
  );
};

export default Home;
