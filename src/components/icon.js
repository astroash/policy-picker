import React from 'react';
import '../home.css';
const Icon = props => (
  <div className="dib">
    <button className={`bn br-100 h3 w3 icon ${props.css}`} />
    <h2 className="f5">{props.topic}</h2>
  </div>
);

export default Icon;
