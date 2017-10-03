import React, { Component } from 'react';
import Icon from './icon';

const Home = props => {
  return (
    <section id="home">
      <Icon topic="Economy" />
      <Icon topic="Environment" />
      <Icon topic="Housing" />
      <Icon topic="Education" />
      <Icon topic="Health" />
      <Icon topic="Ask Ed" />
    </section>
  );
};
export default Home;
