import React from 'react';
import '../css/Home.css';

const Icon = ({ topic, cssImg, changeTopic }) => (
  <div className='center tc ma2 dib'>
    <button onClick={() => changeTopic(topic)} className={`bn br-100 h4 w4 icon ${cssImg}`} />
    <h2 className="f5 black">{topic}</h2>
  </div>
);

export default Icon;
