import React from 'react';
import '../css/SnippetView.css';

const IconSnippet = ({ topic, cssImg }) => (
  <div className="center tc ma2">
    <button  className={`bn br-100 icon ${cssImg}`} id={cssImg}/>
  </div>
);

export default IconSnippet;
