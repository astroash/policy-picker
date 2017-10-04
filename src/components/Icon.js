import React from 'react';
import '../css/Home.css';

const Icon = ({ topic, css }) => (
  <div className="dib">
    <button className={`bn br-100 h3 w3 icon ${css}`} />
    <h2 className="f5 black">{topic}</h2>
  </div>
);

export default Icon;
