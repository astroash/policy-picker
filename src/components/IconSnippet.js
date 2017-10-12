import React from 'react';
import '../css/SnippetView.css';

const IconSnippet = ({ topic, cssImg }) => (
  <div className="center tc ma2">
    <div className={`bn br-100 center icon icon-snippet ${cssImg}`} id={cssImg} />
  </div>
);

export default IconSnippet;
