import React from 'react';
import '../css/Home.css';

const Icon = ({ topic, cssImg, changeTopic }) => (
  <div className="center tc ma2 dib icon-container">
    <button
      onClick={() => changeTopic(topic)}
      className={`bn br-100 icon icon-bg ${cssImg}`}
    />
    <h2 className="f5 black">{topic}</h2>
  </div>
);

export default Icon;
