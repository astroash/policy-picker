import React from 'react';
import '../css/Menu.css';

const IconNoBg = ({ topic, css, changeTopic }) => (
  <button onClick={() => changeTopic(topic)} className={`bn di h3 w3 icon ${css}`} />
);

export default IconNoBg;
