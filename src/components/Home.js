import React from 'react';
import Icon from './Icon';
import { Link } from 'react-router-dom';

import '../css/Home.css';

const Home = ({changeTopic}) => {
  return (
    <section id="home" className="center w-50">
      <Link to="/tax">
        <Icon topic="Tax" css="tax" changeTopic={changeTopic}/>
      </Link>
      <Link to="/ownership">
        <Icon topic="Ownership" css="own" changeTopic={changeTopic}/>
      </Link>
      <Link to="/technology">
        <Icon topic="Technology" css="tech" changeTopic={changeTopic}/>
      </Link>
      <Link to="/welfare">
        <Icon topic="Welfare" css="wel" changeTopic={changeTopic}/>
      </Link>
      <Link to="/workplace">
        <Icon topic="Workplace" css="work" changeTopic={changeTopic}/>
      </Link>
      <Link to="/askanon">
        <Icon topic="Ask Ed" css="ask" changeTopic={changeTopic}/>
      </Link>
    </section>
  );
};

export default Home;
