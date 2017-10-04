import React from 'react';

const PolicyCard = ({ title, desc, imgsrc, ...props }) => {
  return (
    <div className="policy-card" {...props}>
      <img src={imgsrc} alt={title} className="card-img" />
      <h1 className="card-title">{title}</h1>
      <p className="card-desc">{desc}</p>
    </div>
  );
};

export default PolicyCard;
