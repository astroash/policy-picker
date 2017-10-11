import React from 'react';
import '../css/Menu.css';

const IconNoBg = ({ topic, cssImg, changeTopic }) => (
  <button onClick={() => changeTopic(topic)} className={`bn di h3 w3 icon ${cssImg}`} />
);

export default IconNoBg;
