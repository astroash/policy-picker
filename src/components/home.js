import React from 'react';
import Icon from './icon';

const Home = props => {
  return (
    <section id="home">
      <Icon topic="Education" css="edu" />
      <Icon topic="Environment" css="env" />
      <Icon topic="Housing" css="hou" />
      <Icon topic="Economy" css="econ" />
      <Icon topic="Health" css="hea" />
      <Icon topic="Ask Ed" css="ask" />
    </section>
  );
};
export default Home;
