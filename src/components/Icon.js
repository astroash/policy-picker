import React from 'react';
import '../css/Home.css';

const Icon = ({ topic, css, changeTopic }) => (
  <div className="dib center tc ma2">
    <button onClick={() => changeTopic(topic)} className={`bn br-100 h4 w4 icon ${css}`} />
    <h2 className="f5 black">{topic}</h2>
  </div>
);

export default Icon;
