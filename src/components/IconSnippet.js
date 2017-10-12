import React from 'react';
import '../css/SnippetView.css';

const IconSnippet = ({ topic, cssImg }) => (
  <div className="center tc">
    <button className={`bn br-100 icon icon-snippet ${cssImg}`} id={cssImg} />
  </div>
);

export default IconSnippet;
