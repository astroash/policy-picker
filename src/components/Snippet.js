import React from 'react';

const Snippet = ({ title, desc }) => {
  return (
    <div className="card snippet">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Snippet;
