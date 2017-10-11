import React from 'react';
import '../css/Images.css';

const Snippet = ({ title, desc, id }) => {
  //NB cards display in reverse order they appear in policies.json
  return (
    <div className="card snippet" id={id}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Snippet;
